import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/roots";
import ErrorPage from "./routes/error-page";
import Contact from "./routes/contact";
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "contacts/:contactId",
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={appRouter} />;
}

export default App;
