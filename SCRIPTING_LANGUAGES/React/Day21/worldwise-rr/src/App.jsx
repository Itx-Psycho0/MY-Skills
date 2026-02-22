import { BrowserRouter, Routes, Route } from "react-router-dom"
import Product from "./pages/Product.jsx"
import Homepage from "./pages/Homepage.jsx"
import Pricing from "./pages/Pricing.jsx"
import PageNotFound from "./pages/PageNotFound.jsx"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing/>}/>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App


// Routing in React is the process of navigating between different components or pages in a React application. It allows you to create a single-page application (SPA) where users can navigate through different views without needing to reload the entire page. React Router is a popular library used for routing in React applications, providing a simple and declarative way to manage navigation and rendering of components based on the URL.

// With routing, we match different urls to different ui views(react components):routes

// routes are defined in a central place and then used to navigate between different views. This allows for a more organized and maintainable codebase, as well as a better user experience with faster navigation and smoother transitions between pages.

// In React, we can use the React Router library to implement routing. React Router provides a set of components and hooks that allow us to define routes and navigate between them. We can define routes using the <Route> component, which takes a path and a component to render when the path matches the current URL. We can also use the <Link> component to create links that navigate to different routes without causing a full page reload.

// Overall, routing in React is an essential part of building modern web applications, allowing us to create dynamic and interactive user interfaces that can navigate between different views seamlessly.

// Single Page Application(SPA) is a web application that loads a single HTML page and dynamically updates the content as the user interacts with the app. In an SPA, all the necessary code (HTML, CSS, JavaScript) is loaded once, and subsequent interactions with the app do not require a full page reload. Instead, the app uses JavaScript to manipulate the DOM and update the content on the page based on user actions or changes in data. This results in a smoother and faster user experience, as only the relevant parts of the page are updated rather than reloading the entire page. SPAs are commonly built using frameworks like React, Angular, or Vue.js.