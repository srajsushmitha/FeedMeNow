import { useState, useEffect } from "react";
import restaurants from "../utils/mockData";
import { SWIGGY_API } from "../utils/constants";

import { RestaurantCard } from "./RestaurantCard";
import { Shimmer } from "./Shimmer";

const Body = () => {
  const [data, setData] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

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

  return data.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="input-box"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <button
          className="search-button"
          onClick={() => {
            const filteredRes = data.filter((ele) =>
              ele.info.name.toLowerCase().includes(inputText.toLowerCase())
            );
            setFilteredRestaurant(filteredRes);
          }}
        >
          Search
        </button>
        <div className="filter">
          <button
            onClick={() => {
              const resArr = data.filter((ele) => ele.info.avgRating > 4);
              setFilteredRestaurant(resArr);
            }}
          >
            High rated restaurants
          </button>
        </div>
      </div>
      <div className="restaurant-container">
        {filteredRestaurant.map((ele) => (
          <RestaurantCard key={ele.info.id} data={ele} />
        ))}
      </div>
    </div>
  );
};

export default Body;
