import IMAGES_URL from '../utils/constants'
import '../../css/index.css'

export const RestaurantCard = ({ data }) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = data.info;
  return (
    <div className='bg-gray-100 w-[250] m-4 p-4 hover:bg-gray-300 hover:scale-95'>
      <img
        className="rounded-lg w-64"
        src={IMAGES_URL+cloudinaryImageId}
        alt="Leon Grill"
      ></img>
      <div className="card-content">
        <h2 className='text-lg font-bold'>{name}</h2>
        <h6>{cuisines.join(', ')}</h6>
        <h6>⭐ {avgRating}</h6>
        <h6>{costForTwo}</h6>
      </div>
    </div>
  );
};

export const IsOpen = (RestaurantCard)=>{
  return(props)=>{
    return(
      <div>
      <label className='absolute bg-gray-800 text-white rounded-sm h-6 text-justify'>Open</label>
      <RestaurantCard {...props}/>
      </div>
    )
  }
}
// export default RestaurantCard;