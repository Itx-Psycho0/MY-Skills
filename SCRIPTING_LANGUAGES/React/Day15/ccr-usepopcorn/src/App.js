// Only importing what we actually need from React:
// - useEffect: to run side effects (like fetching data from API)
// - useState: to store and update data that the UI depends on
import { use, useEffect, useState } from "react";

// ── Helper function: calculates the average of an array of numbers ──
// Example: average([10, 20, 30]) → 20
// It divides each number by the array length, then adds them all up
const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

// ── Your OMDB API key (needed to fetch movie data from omdbapi.com) ──
const KEY = "51e1060d";
// ═══════════════════════════════════════════════════════════
// MAIN APP COMPONENT — The brain of the whole application
// It manages all the important data (state) and passes it
// down to child components as props
// ═══════════════════════════════════════════════════════════
export default function App() {
  // movies: the list of search results from the API
  const [movies, setMovies] = useState([]);

  // watched: movies the user has already watched and rated
  // const [watched, setWatched] = useState([]);

  // Initialize "watched" state from localStorage, or start with empty array if nothing there
   const [watched, setWatched] = useState(() => {
    const storedValue = localStorage.getItem("watched");
    return storedValue ? JSON.parse(storedValue) : [];
  });



  // isLoading: true while we're waiting for the API response
  const [isLoading, setIsLoading] = useState(false);

  // error: stores any error message to show to the user
  const [error, setError] = useState("");

  // query: what the user typed in the search box
  const [query, setQuery] = useState("");

  // selectedId: which movie the user clicked on to see details
  // null means no movie is selected
  const [selectedId, setSelectedId] = useState(null);

  // ── Toggle movie selection ──
  // If user clicks the same movie again, deselect it (set to null)
  // If user clicks a different movie, select that one
  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  // ── Close the movie details panel ──
  function handleCloseMovie() {
    setSelectedId(null);
  }

  // ── Add a movie to the "watched" list ──
  // Takes the old watched list and adds the new movie at the end
  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);

    // localStorage.setItem("watched", JSON.stringify([...watched, movie]));
  }

  // ── Remove a movie from the "watched" list ──
  // Keeps every movie EXCEPT the one with matching id
  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
    // localStorage.setItem("watched", JSON.stringify(watched.filter((movie) => movie.imdbID !== id)));
  }


  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(watched));
  }, [watched]);


  // ── Fetch movies from OMDB API whenever the search query changes ──
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
    handleCloseMovie();
    fetchMovies();

    // CLEANUP: if query changes again before fetch finishes,
    // cancel the previous request to avoid stale data
    return () => controller.abort();
  }, [query]);
  // ═══════════════════════════════════════════════════════════
  // RENDERING THE UI
  // The app has two main sections:
  // LEFT BOX: search results
  // RIGHT BOX: either movie details OR watched list
  // ═══════════════════════════════════════════════════════════
  return (
    <>
      {/* Top navigation bar with logo, search input, and result count */}
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        {/* LEFT BOX — Search results */}
        <Box>
          {/* Show loading spinner while fetching */}
          {isLoading && <Loader />}
          {/* Show movie list only when NOT loading and NO error */}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {/* Show error message if something went wrong */}
          {error && <ErrorMessage message={error} />}
        </Box>

        {/* RIGHT BOX — Movie details OR watched summary */}
        <Box>
          {selectedId ? (
            // If a movie is selected, show its full details
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            // Otherwise show the watched list with stats
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

// ═══════════════════════════════════════════════════════════
// SMALL HELPER COMPONENTS
// ═══════════════════════════════════════════════════════════

// Shows a "Loading..." message while data is being fetched
function Loader() {
  return <p className="loader">Loading...</p>;
}

// Shows an error message with a ⛔ icon
function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>⛔</span> {message}
    </p>
  );
}

// ═══════════════════════════════════════════════════════════
// NAVIGATION BAR — sits at the top of the page
// Uses "children" prop so we can put anything inside it
// ═══════════════════════════════════════════════════════════
function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

// App logo with popcorn emoji
function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}

// ── Search input ──
// "query" is the current text, "setQuery" updates it when user types
function Search({ query, setQuery }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

// Shows how many movies were found (e.g., "Found 10 results")
function NumResults({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

// ═══════════════════════════════════════════════════════════
// LAYOUT COMPONENTS
// ═══════════════════════════════════════════════════════════

// Simple wrapper for the main content area
function Main({ children }) {
  return <main className="main">{children}</main>;
}

// Collapsible box — can be toggled open/closed with a button
// Uses "children" prop so any content can go inside
function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      {/* Toggle button: shows "–" when open, "+" when closed */}
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>

      {/* Only render children when the box is open */}
      {isOpen && children}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// MOVIE LIST — Shows search results as a clickable list
// ═══════════════════════════════════════════════════════════
function MovieList({ movies, onSelectMovie }) {
  return (
    <ul className="list list-movies">
      {/* "?." (optional chaining) protects against movies being null */}
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}

// ── Single movie in the search results ──
// When clicked, it tells the parent which movie was selected
function Movie({ movie, onSelectMovie }) {
  return (
    <li onClick={() => onSelectMovie(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

// ═══════════════════════════════════════════════════════════
// MOVIE DETAILS — Full info panel for a selected movie
// Shows poster, plot, actors, director, and lets user rate it
// ═══════════════════════════════════════════════════════════
function MovieDetails({ selectedId, onCloseMovie, onAddWatched, watched }) {
  // "movie" stores the full details fetched from the API
  // (renamed from "movies" — it's a single movie, not a list)
  const [movie, setMovie] = useState({});

  // Loading state for this specific detail fetch
  const [isLoading, setIsLoading] = useState(false);

  // The rating the user gives this movie (starts empty)
  const [userRating, setUserRating] = useState("");

  // Check if this movie is already in the watched list
  const isWatched = watched.map((m) => m.imdbID).includes(selectedId);

  // If already watched, grab the rating the user gave it before
  const watchedUserRating = watched.find(
    (m) => m.imdbID === selectedId
  )?.userRating;

  // ── Destructure the API response into readable variable names ──
  // BUG FIX: OMDB returns "Runtime" (lowercase 't'), NOT "RunTime"
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime, // FIX: was "RunTime" — OMDB API uses "Runtime"
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  // ── Build a watched-movie object and add it to the list ──
  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      Title: title,
      Year: year,
      Poster: poster,
      // FIX: added safety check — runtime could be "N/A" or undefined
      // "148 min".split(" ") → ["148", "min"], .at(0) → "148", Number() → 148
      runtime: runtime ? Number(runtime.split(" ").at(0)) : 0,
      imdbRating: Number(imdbRating),
      userRating: Number(userRating),
    };
    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }

  // ── Fetch full movie details whenever selectedId changes ──
  useEffect(() => {
    // AbortController lets us cancel the fetch if user clicks a different movie
    const controller = new AbortController();

    async function getMovieDetails() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`,
          { signal: controller.signal }
        );
        const data = await res.json();
        setMovie(data);
      } catch (err) {
        // Ignore abort errors (they happen when we cancel on purpose)
        if (err.name !== "AbortError") {
          console.error("Failed to fetch movie details:", err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    getMovieDetails();

    // Cleanup: cancel fetch if user selects a different movie
    return () => controller.abort();
  }, [selectedId]);

  // ── Update the browser tab title to show the movie name ──
  useEffect(() => {
    if (!title) return;
    document.title = `Movie | ${title}`;

    // Cleanup: reset tab title when leaving details view
    return () => {
      document.title = "usePopcorn";
    };
  }, [title]);

  // ── Close details when user presses Escape key ──
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.code === "Escape") {
        onCloseMovie();
      }
    }
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup: remove the event listener when component unmounts
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onCloseMovie]);

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {/* Movie header with poster and basic info */}
          <header>
            <button onClick={onCloseMovie} className="btn-back">
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${title}`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐️</span>
                <span>{imdbRating} IMDb rating</span>
              </p>
            </div>
          </header>

          {/* Rating section */}
          <section>
            <div className="rating">
              {isWatched ? (
                // If already watched, just show the rating they gave
                <p>
                  You rated this movie {watchedUserRating} <span>⭐️</span>
                </p>
              ) : (
                // Otherwise let them rate it and add to list
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAdd}>
                      + Add to list
                    </button>
                  )}
                </>
              )}
            </div>
          </section>

          {/* Movie body: plot, cast, director */}
          <div className="details-body">
            <p>
              <em>{plot}</em>
            </p>
            <p>
              <strong>Starring:</strong> {actors}
            </p>
            <p>
              <strong>Directed by:</strong> {director}
            </p>
          </div>
        </>
      )}
    </div>
  );
}


// ═══════════════════════════════════════════════════════════
// WATCHED SUMMARY — Shows stats about all watched movies
// (average IMDB rating, average user rating, average runtime)
// ═══════════════════════════════════════════════════════════
function WatchedSummary({ watched }) {
  // Calculate averages from the watched list
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(2)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating.toFixed(2)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime.toFixed(2)} min</span>
        </p>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// WATCHED MOVIES LIST — Renders each movie the user watched
// ═══════════════════════════════════════════════════════════
function WatchedMoviesList({ watched, onDeleteWatched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  );
}

// ── Single watched movie item ──
// BUG FIX: was using movie.poster / movie.title (lowercase)
// but the data stores them as movie.Poster / movie.Title (uppercase)
function WatchedMovie({ movie, onDeleteWatched }) {
  return (
    <li>
      {/* FIX: Poster and Title are uppercase (that's how we store them) */}
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
      </div>
      {/* Delete button removes this movie from the watched list */}
      <button
        className="btn-delete"
        onClick={() => onDeleteWatched(movie.imdbID)}
      >
        X
      </button>
    </li>
  );
}

// ═══════════════════════════════════════════════════════════
// STAR RATING COMPONENT — Interactive star picker
// Hover over stars to preview, click to set the rating
// ═══════════════════════════════════════════════════════════
function StarRating({ maxRating = 5, size = 48, onSetRating }) {
  // "rating" is the permanently selected rating (after click)
  const [rating, setRating] = useState(0);

  // "tempRating" is the hover preview (resets when mouse leaves)
  const [tempRating, setTempRating] = useState(0);

  // Show whichever is active: hover preview OR saved rating
  const displayRating = tempRating || rating;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      {/* Stars container */}
      <div style={{ display: "flex" }}>
        {/* FIX: was hardcoded to Array(10) — now uses maxRating prop */}
        {Array.from({ length: maxRating }, (_, i) => (
          <span
            key={i}
            style={{
              fontSize: size, // use the size prop instead of hardcoded 24
              color: i < displayRating ? "#fcc419" : "#ddd",
              cursor: "pointer",
              lineHeight: "1",
            }}
            // Click = permanently set this rating
            onClick={() => {
              setRating(i + 1);
              onSetRating(i + 1);
            }}
            // Hover = temporarily preview this rating
            onMouseEnter={() => setTempRating(i + 1)}
            // Mouse leaves = go back to the saved rating
            onMouseLeave={() => setTempRating(0)}
          >
            {/* Filled star if selected, outline star if not */}
            {i < displayRating ? "★" : "☆"}
          </span>
        ))}
      </div>
      {/* Show the number next to the stars */}
      <p style={{ margin: 0, fontSize: size / 1.5 }}>
        {displayRating || ""}
      </p>
    </div>
  );
}

// {/* eslint-disable */} — inside curly braces command turns off ESLint warnings for this file (optional)


// What is lazy evaluation? — It's when we delay doing a calculation until we actually need the result. In React, this can be useful for initializing state from localStorage, because we only want to read from localStorage once when the component first mounts, not on every render. By passing a function to useState (like useState(() => ...)), React will call that function only on the initial render to get the initial state value. This way we avoid unnecessary reads from localStorage on every render, which can improve performance.

// Make sure to not mutate object and array state directly (like using push or splice), because React won't detect the change and won't re-render the component. Instead, always create a new array or object when updating state (like using spread operator [...watched, newMovie] or filter to create a new array without the deleted movie). This way React can see that the state has changed and will update the UI accordingly.