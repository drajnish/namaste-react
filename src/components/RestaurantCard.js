import { CDN_IMG_LINK } from '../constants';

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, area }) => {
  return (
    <div className="card">
      <img src={CDN_IMG_LINK + cloudinaryImageId} alt={name} />
      <h2>{name}</h2>
      <h3>{cuisines.join(', ')}</h3>
      <h4>{area} </h4>
    </div>
  );
};

export default RestaurantCard;
