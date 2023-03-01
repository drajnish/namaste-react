import { CDN_IMG_LINK } from '../constants';

const FoodItem = ({ name, description, cloudinaryImageId, price }) => {
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={CDN_IMG_LINK + cloudinaryImageId} alt={name} />
      <h2 className="font-blod text-xl">{name}</h2>
      <h3>{description}</h3>
      <h4>₹: {price / 100}</h4>
    </div>
  );
};

export default FoodItem;
