import { useState, useEffect } from "react";

const KEY = "51e1060d";
export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    // Create an AbortController so we can cancel the request
    // if the user keeps typing (prevents race conditions where
    // an old slow request overwrites a newer fast one)
    const controller = new AbortController();

    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");

        // Call the OMDB API with our search query
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal } // attach abort signal
        );

        // If the server returns a bad status code (like 500)
        if (!res.ok)
          throw new Error("Something went wrong with fetching movies");

        const data = await res.json();

        // OMDB returns { Response: "False" } when nothing matches
        if (data.Response === "False") throw new Error("Movie not found");

        // Success! Save the search results
        setMovies(data.Search);
        setError(""); // clear any previous error
      } catch (err) {
        // Ignore AbortError — that just means we cancelled on purpose
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        // Whether success or failure, stop showing the loading spinner
        setIsLoading(false);
      }
    }

    // Don't search if query is too short (less than 2 characters)
    if (query.length < 2) {
      setMovies([]);
      setError("");
      return;
    }

    // Close any open movie details before searching
 
    fetchMovies();

    // CLEANUP: if query changes again before fetch finishes,
    // cancel the previous request to avoid stale data
    return () => controller.abort();
  }, [query]);
  return { movies, isLoading, error };
}