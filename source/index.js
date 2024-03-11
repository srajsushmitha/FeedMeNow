import React, {Suspense, lazy} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import "../css/index.css";

const Contact = lazy(()=>import('./components/Contact'));

const AppLayoutComponent = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayoutComponent />,
    children: [
      {
        path: "/about-us",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/home",
        element: <Body />,
      },
      {
        path: "/contact-us",
        element: <Suspense fallback={<div><h2>Loading...</h2></div>}><Contact /></Suspense>,
      },
      {
        path: "/res/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
