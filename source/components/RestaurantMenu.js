import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';

import { Shimmer } from "./Shimmer";
import { RESTAURANT_MENU } from "../utils/constants";


export default RestaurantMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const {id} = useParams()
  useEffect(() => {
    resMenu();
  }, []);

  const resMenu = async () => {
    console.log(RESTAURANT_MENU + id)
    const data = await fetch(RESTAURANT_MENU + id);
    const jsonData = await data.json();
    setMenuItems(jsonData);
    // console.log("data", jsonData);
    // console.log("info", jsonData.data?.cards[0]?.card?.card?.info);
    // console.log(
    //   "list of res",
    //   jsonData.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    // );
  };
  return menuItems.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="resDetails">
        <h2>{menuItems.data?.cards[0]?.card?.card?.info.name}</h2>
        <h4>{menuItems.data?.cards[0]?.card?.card?.info.cuisines.join(",")}</h4>
        <h4>{menuItems.data?.cards[0]?.card?.card?.info.avgRating}</h4>
      </div>
      <div className="menu">
        <ul>
        </ul>
      </div>
    </div>
  );
};
