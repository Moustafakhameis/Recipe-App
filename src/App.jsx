import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import MealDetails from "./components/MealDetails/MealDetails";
import NotFound from "./components/NotFound/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "meal/:id", element: <MealDetails /> },
      ],
    },
    {
      path: "*",
      element: (
        
          <NotFound />

      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
