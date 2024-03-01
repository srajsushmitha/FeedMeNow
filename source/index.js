import React from "react";
import ReactDOM from "react-dom/client";

import Header from './components/Header'
import Body from './components/Body'
import "../css/index.css";


const AppLayoutComponent = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayoutComponent />);
