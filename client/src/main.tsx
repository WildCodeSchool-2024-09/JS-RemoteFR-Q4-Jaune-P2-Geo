// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

/* ************************************************************************* */

// Import the main app component/pages
import App from "./App";
import Contact from "./pages/Contact/Contact";
import Games from "./pages/Games/Games";
import Home from "./pages/Home/Home";
import Rules from "./pages/Rules/Rules";

//CSS import
import "./App.css";
import "./pages/Contact/contact.css";
import "./pages/Home/home.css";
import "./pages/Flags/flags.css";
import "./pages/Games/games.css";
import "./pages/Games/theme.css";

import "./pages/Rules/rules.css";
import "./components/Footer/footer.css";
import "./components/Nav/nav.css";
// Import additional components for new routes

// Try creating these components in the "pages" folder

// import About from "./pages/About";
// import Contact from "./pages/Contact";

/* ************************************************************************* */

// Create router configuration with routes
// You can add more routes as you build out your app!
const router = createBrowserRouter([
  {
    // The root path
    element: <App />, // Renders the App component for the home page
    children: [
      { path: "/", element: <Home /> },
      { path: "/Contact", element: <Contact /> },
      { path: "/Games", element: <Games /> },
      { path: "/Rules", element: <Rules /> },
    ],
  },
  // Try adding a new route! For example, "/about" with an About component
]);

/* ************************************************************************* */

// Find the root element in the HTML document
const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

// Render the app inside the root element
createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

/**
 * Helpful Notes:
 *
 * 1. Adding More Routes:
 *    To add more pages to your app, first create a new component (e.g., About.tsx).
 *    Then, import that component above like this:
 *
 *    import About from "./pages/About";
 *
 *    Add a new route to the router:
 *
 *      {
 *        path: "/about",
 *        element: <About />,  // Renders the About component
 *      }
 *
 * 2. Try Nested Routes:
 *    For more complex applications, you can nest routes. This lets you have sub-pages within a main page.
 *    Documentation: https://reactrouter.com/en/main/start/tutorial#nested-routes
 *
 * 3. Experiment with Dynamic Routes:
 *    You can create routes that take parameters (e.g., /users/:id).
 *    Documentation: https://reactrouter.com/en/main/start/tutorial#url-params-in-loaders
 */
