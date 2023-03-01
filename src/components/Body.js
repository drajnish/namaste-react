import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { filterData } from '../utils/helper';
import useRestaurant from '../utils/useRestaurant';
import UserContext from '../utils/UserContext';

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState('');

  const { user, setUser } = useContext(UserContext);

  useRestaurant(setAllRestaurants, setFilteredRestaurants);

  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-5 bg-pink-50 my-5">
        <input
          name="search"
          type="text"
          className="focus:bg-green-300 p-1"
          placeholder="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="py-1 px-2 m-2 bg-purple-700 hover:bg-purple-600 text-white rounded-md"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>

        <input
          type="text"
          className="p-1"
          name="context"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="text"
          className="p-1"
          name="context"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </div>
      <div className="flex flex-wrap justify-center">
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
