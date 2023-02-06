import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import { CDN_IMG_LINK } from '../constants';

const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  const { restaurantId } = useParams();

  useEffect(() => {
    restaurant();
  }, []);

  async function restaurant() {
    const data = await fetch(
      'https://www.swiggy.com/dapi/menu/v4/full?lat=23.237098&lng=77.43795&menuId=' +
        restaurantId
    );
    const json = await data.json();
    setRestaurantMenu(json.data);
  }

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
