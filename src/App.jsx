import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Layout, RequireAuth } from './Pages/layout/Layout';
import HomePage from './Pages/homePage/HomePage';
import ListPage from './Pages/listPage/ListPage';
import SinglePage from './Pages/singlepage/SinglePage';
import LoginPage from './Pages/login/LoginPage';
import ProfilePage from './Pages/profilePage/profilePage';
import Register from './Pages/register/register';
import ProfileUpdatePage from './Pages/profileUpdatePage/profileUpdatePage';
import NewPostPage from './Pages/newPostPage/newPostPage';
import { listPageLoader, profilePageLoader, singlePageLoader } from "./lib/loaders.js";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
          loader: listPageLoader,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        // Moved /:id to be last to avoid conflicts
        {
          path: "/:id",
          element: <SinglePage />,
          loader: singlePageLoader,
        },
      ],
    },
    {
      path: "/profile",
      element: <RequireAuth />,
      children: [
        {
          path: "",
          element: <ProfilePage />,
          loader: profilePageLoader,
        },
        {
          path: "update",
          element: <ProfileUpdatePage />,
        },
        {
          path: "add",
          element: <NewPostPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;



















