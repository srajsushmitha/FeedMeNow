import { useEffect, useState } from "react";

import { SWIGGY_API } from "../constants";

export default useRestaurantData = (filteredArr) => {
  const [data, setData] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

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
  return {data, filteredRestaurant};
};
