import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { store } from "./redux/store/reduxStore";
import { Provider } from "react-redux";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import RestaurantMenu from "./components/RestaurantMenu";
import {UserInfo} from "./contexts/UserContext";
import { Cart } from "./components/Cart";
import Error from "./components/Error";

import "../css/index.css";

const Contact = lazy(() => import("./components/Contact"));

const AppLayoutComponent = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    //call an api
    const user = {
      name: "Sushmitha",
    };
    setUserName(user.name);
  },[]);

  return (
    <Provider store={store}>
    <UserInfo.Provider  value={{"name":userName, setUserName}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserInfo.Provider>
    </Provider>
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
        path: "/contact-us",
        element: (
          <Suspense
            fallback={
              <div>
                <h2>Loading...</h2>
              </div>
            }
          >
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/res/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
