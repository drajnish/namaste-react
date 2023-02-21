import { useState, useEffect } from 'react';

import { FETCH_RESTAURANT_LINK } from '../constants';

const useRestaurant = (setAllRestaurants, setFilteredRestaurants) => {
  let initialData;

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(FETCH_RESTAURANT_LINK);
    const res = await data.json();
    initialData = res?.data?.cards[2]?.data?.data?.cards;
    setAllRestaurants(initialData);
    setFilteredRestaurants(initialData);
  }
};

export default useRestaurant;
