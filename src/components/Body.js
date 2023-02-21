import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { filterData } from '../utils/helper';
import useRestaurant from '../utils/useRestaurant';

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState('');

  useRestaurant(setAllRestaurants, setFilteredRestaurants);

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
              <Link
                to={'/restaurant/' + restaurant?.data?.id}
                key={restaurant?.data?.id}
              >
                <RestaurantCard {...restaurant?.data} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
