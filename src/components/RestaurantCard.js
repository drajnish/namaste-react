import { CDN_IMG_LINK } from '../constants';

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, area }) => {
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={CDN_IMG_LINK + cloudinaryImageId} alt={name} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(', ')}</h3>
      <h4>{area} </h4>
    </div>
  );
};

export default RestaurantCard;
