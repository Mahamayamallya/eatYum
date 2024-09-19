const RestaurantCard = (props) => {
  //console.log(props.restaurant.info);
  const { name, costForTwo, avgRating, cloudinaryImageId, cuisines, sla } =
    props.restaurant.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="logo"
      />
      <h2>{name}</h2>
      <div>
        <p>{costForTwo}</p>
        <p>{avgRating}/5</p>
      </div>
      <p>{sla.deliveryTime} min</p>
      <p>{cuisines.join(", ")}</p>
    </div>
  );
};

export default RestaurantCard;
