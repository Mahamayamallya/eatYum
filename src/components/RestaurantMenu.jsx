import { useEffect } from "react";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);
  //   TODO: GET INDIVIDUAL API'S - SPLIT IT TO : URL => COMMON_URL + ID. USE THIS URL AND LOAD DATA UNDER:
  //    /restaurants/id

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.33180&lng=74.74540&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants[0]?.cta
    );
  };

  return <div></div>;
};

export default RestaurantMenu;
