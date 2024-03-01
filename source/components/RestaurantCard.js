import IMAGES_URL from '../utils/constants'
import '../../css/index.css'

export const RestaurantCard = ({ data }) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = data.info;
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-image"
        src={IMAGES_URL+cloudinaryImageId}
        alt="Leon Grill"
      ></img>
      <div className="card-content">
        <h2>{name}</h2>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};

// export default RestaurantCard;