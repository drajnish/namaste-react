import { useState, useEffect } from 'react';
import { FETCH_MENU_URL } from '../constants';

const useRestaurant = (restaurantId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    filterData();
  }, []);

  async function filterData() {
    const data = await fetch(FETCH_MENU_URL + restaurantId);
    const json = await data.json();
    setRestaurant(json.data);
  }
  return restaurant;
};

export default useRestaurant;
