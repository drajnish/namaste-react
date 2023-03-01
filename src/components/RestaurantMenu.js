import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import Shimmer from './Shimmer';
import { CDN_IMG_LINK } from '../constants';

import { addItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

const RestaurantMenu = () => {
  const { restaurantId } = useParams();

  const restaurantMenu = useRestaurantMenu(restaurantId);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurantMenu ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <h1>{restaurantMenu?.name}</h1>
        <img src={CDN_IMG_LINK + restaurantMenu?.cloudinaryImageId} />
      </div>
      <div>
        <h3>Menu</h3>
        <ul>
          {Object.values(restaurantMenu?.menu?.items).map((item) => (
            <li key={item.id}>
              {item.name}{' '}
              <button
                className="p-2 m-2 bg-green-300"
                onClick={() => addFoodItem(item)}
              >
                Add
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RestaurantMenu;
