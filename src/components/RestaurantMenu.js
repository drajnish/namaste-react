import { useParams } from 'react-router-dom';
import useRestaurant from '../utils/useRestaurant';
import Shimmer from './Shimmer';
import { CDN_IMG_LINK } from '../constants';

const RestaurantMenu = () => {
  const { restaurantId } = useParams();

  const restaurantMenu = useRestaurant(restaurantId);

  return !restaurantMenu ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <h1>{restaurantMenu?.name}</h1>
        <img src={CDN_IMG_LINK + restaurantMenu?.cloudinaryImageId} />
        <h2>Restaurant Id : {restaurantId}</h2>
      </div>
      <div>
        <h3>Items</h3>
        <ul>
          {Object.values(restaurantMenu?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RestaurantMenu;
