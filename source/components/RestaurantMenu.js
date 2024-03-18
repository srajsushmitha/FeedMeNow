import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Shimmer } from "./Shimmer";
import { RESTAURANT_MENU } from "../utils/constants";
import { RestaurantCategory } from "./RestaurantCategory";

export default RestaurantMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [showItems, setShowItems] = useState();

  const { id } = useParams();
  useEffect(() => {
    resMenu();
  }, []);

  const resMenu = async () => {
    const data = await fetch(RESTAURANT_MENU + id);
    const jsonData = await data.json();
    setMenuItems(jsonData);
    // console.log("data", jsonData);
    // console.log("info", jsonData.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    // console.log(
    //   "list of res",
    //   jsonData.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    // );
  };
  const resSec =
    menuItems.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (ele) => {
        return (
          ele.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
          ele.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
        );
      }
    );
  return menuItems.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="text-center">
        <h2 className="font-bold text-lg">
          {menuItems.data?.cards[0]?.card?.card?.info.name}
        </h2>
        <h4>{menuItems.data?.cards[0]?.card?.card?.info.cuisines.join(",")}</h4>
        <h4>{menuItems.data?.cards[0]?.card?.card?.info.avgRating}</h4>
        {resSec.map((ele, index) => (
          <RestaurantCategory
            key={ele?.card?.card?.title}
            data={ele?.card?.card}
            showIndex={index === showItems ? true : false}
            setShowItems={() => {
              index === showItems ? setShowItems() : setShowItems(index);
            }}
          />
        ))}
      </div>
      <div className="menu">
        <ul></ul>
      </div>
    </div>
  );
};
