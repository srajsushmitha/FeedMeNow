import { useState } from "react";
import { Link } from "react-router-dom";

import useOnlineStatus from '../utils/hooks/useOnlineStatus'
import logo from "../../images/logo.png";
import cart from "../../images/cart.jpeg";

export default Header = () => {
  const [str, setStr] = useState("Login");
  const status = useOnlineStatus()
  console.log(status)
  return (
    <div className = "border-4 flex justify-between items-center">
      <div className="logo-container">
        <img className="w-[100]" src={logo} alt="logo" />
      </div>
      <div >
        <ul className="flex flex-wrap items-center p-4 m-4 ">
          <li className="p-4 m-4">Online status: {status ? "🟢" : "🔴"}</li>
          <Link to="/home">
            <li className="p-4 m-4">Home</li>
          </Link>
          <Link to="/about-us">
            <li className="p-4 m-4">About</li>
          </Link>
          <Link to="/contact-us">
            <li className="p-4 m-4">Contact Us</li>
          </Link>
          <Link to="/">
            <li>
              <img className="w-[80]" src={cart} />
            </li>
          </Link>
          <button
            className="p-4 m-4"
            onClick={() => {
              str === "Login" ? setStr("Logout") : setStr("Login");
            }}
          >
            {str}
          </button>
        </ul>
      </div>
    </div>
  );
};
