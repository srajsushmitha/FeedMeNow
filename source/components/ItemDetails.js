import IMAGES_URL from "../utils/constants";

export const ItemDetails = (props) => {
  const { name, price, description, defaultPrice, imageId } = props.data;
  return (
    <div className="flex justify-between">
      <div className=" w-9/12  border-b-2">
        <ul className="text-wrap text-left">
          <li className="text-md my-2">{name}</li>
          <li className="text-sm">₹{price ? price / 100 : defaultPrice}</li>
          <li className="text-xs my-2">{description}</li>
        </ul>
      </div>
      <div className="w-3/12 p-4">
        <img className="rounded-md" src={IMAGES_URL + imageId} />
        <div className=" bg-white text-green-500  rounded-md w-auto my-2 border-2">
          <button>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
