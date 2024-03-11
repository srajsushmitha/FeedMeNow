import { ItemDetails } from "./ItemDetails";

export const RestaurantCategory = (props) => {
  // console.log("props:", props);
  const {setShowItems,showIndex} = props;
  const { title, itemCards } = props.data;

const handleClick=()=>{
  setShowItems();
}

  return (
    <div>
      <div className="bg-gray-100 shadow-lg w-6/12 mx-auto p-4 my-4 ">
        <div className="flex justify-between  cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-md">
          {title} ({itemCards?.length})
        </span>
        <span>🔽</span>
      </div>
      {showIndex && itemCards.map(ele=> <ItemDetails key={ele?.card?.info?.id} data={ele?.card?.info} />)}
    </div>
    </div>
  );
};
