import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { SWIGGY_API } from "../utils/constants";
import { RestaurantCard, IsOpen } from "./RestaurantCard";
import { Shimmer } from "./Shimmer";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import { UserInfo } from "../contexts/UserContext";

const Body = () => {
  const [data, setData] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  // const IsOpenCard = IsOpen(RestaurantCard);

  const { name, setUserName } = useContext(UserInfo);
  console.log("name is", name);

  const fetchData = async () => {
    const apiRes = await fetch(SWIGGY_API);
    const apiData = await apiRes?.json();
    setData(
      apiData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurant(
      apiData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>Please check your internet connection</h1>;
  return data.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body justify-between">
      <div className="flex py-4 px-2">
        <input
          type="text"
          className="bg-gray-100 border-4 border-gray-300 shadow-red-500 shadow-sm"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <button
          className="rounded-xl border-4 border-gray-300 px-1 mx-1 text-sm shadow-red-500 shadow-sm"
          onClick={() => {
            const filteredRes = data.filter((ele) =>
              ele.info.name.toLowerCase().includes(inputText.toLowerCase())
            );
            setFilteredRestaurant(filteredRes);
          }}
        >
          Search
        </button>
        <div className="rounded-xl border-4 border-gray-300 ml-10 text-sm p-1 shadow-red-500 shadow-sm">
          <button
            className="text-center"
            onClick={() => {
              const resArr = data.filter((ele) => ele.info.avgRating > 4);
              setFilteredRestaurant(resArr);
            }}
          >
            High rated restaurants
          </button>
        </div>
        <input
          className="rounded-xl border-4 border-gray-300 ml-10 text-sm p-1 shadow-red-500 shadow-sm"
          value={name}
          onChange={(e)=>setUserName(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurant.map((ele) => (
          <Link to={"/res/" + ele.info.id} key={ele.info.id}>
            <RestaurantCard data={ele} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
