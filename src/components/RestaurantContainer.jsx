import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const RestaurantContainer = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.33180&lng=74.74540&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setAllRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const displaySearchedProducts = () => {
    const filteredRes = allRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setRestaurantList(filteredRes);
  };

  const topRatedRes = () => {
    const filteredRes = allRestaurants.filter(
      (res) => res.info.avgRating >= 4.5
    );
    setRestaurantList(filteredRes);
  };
  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="filter-tab">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button className="btn" onClick={displaySearchedProducts}>
          Search
        </button>
        <button className="btn" onClick={topRatedRes}>
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {console.log(restaurantList[0].cta.link)}
        {restaurantList.map((restaurant) => (
          <Link key={restaurant.info.id} to={restaurantList[0].cta.link}>
            {" "}
            <RestaurantCard restaurant={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RestaurantContainer;
