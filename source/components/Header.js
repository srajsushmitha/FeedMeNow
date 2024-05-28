import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { UserInfo } from "../contexts/UserContext";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import logo from "../../images/logo.png";
import cart from "../../images/cart.jpeg";

export default Header = () => {
  const [str, setStr] = useState("Login");
  const { name } = useContext(UserInfo);
  const cartItems = useSelector((store) => store.cart.items);
  const status = useOnlineStatus();
  return (
    <div className="border-4 flex justify-between items-center">
      <div className="logo-container">
        <img className="w-[100]" src={logo} alt="logo" />
      </div>
      <p className="text-red-600">Please enable CORS on your browser</p>

      <div>
        <ul className="flex flex-wrap items-center p-4 m-4 ">
          <li className="p-4 m-4">Online status: {status ? "🟢" : "🔴"}</li>
          <Link to="/">
            <li className="p-4 m-4">Home</li>
          </Link>
          <Link to="/about-us">
            <li className="p-4 m-4">About</li>
          </Link>
          <Link to="/contact-us">
            <li className="p-4 m-4">Contact Us</li>
          </Link>
          <Link to="/cart">
            <li className="flex">
              <img className="w-[80]" src={cart} />
              <h6 className="absolute font-bold ml-12">{cartItems.length}</h6>
            </li>
          </Link>
          <button
            className="w-4 mx-4"
            onClick={() => {
              str === "Login" ? setStr("Logout") : setStr("Login");
            }}
          >
            {str}
          </button>
          <span className="wx-4 p-4 mx-4">User: {name}</span>
        </ul>
      </div>
    </div>
  );
};
