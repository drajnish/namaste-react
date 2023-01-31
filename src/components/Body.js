import { useState, useEffect } from 'react';

import { restaurantList } from '../constants';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.237098&lng=77.43795&page_type=DESKTOP_WEB_LISTING'
    );
    const res = await data.json();
    setAllRestaurants(res?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(res?.data?.cards[2]?.data?.data?.cards);
  }

  // Early return
  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-box">
        <input
          name="search"
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-button"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants?.length === 0 ? (
          <h1>No Restaurant match your filter!!</h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <RestaurantCard
                key={restaurant?.data?.id}
                {...restaurant?.data}
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
