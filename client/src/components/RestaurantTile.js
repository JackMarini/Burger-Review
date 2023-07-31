import React from "react";
import { Link } from "react-router-dom";

const RestaurantTile = (props) => {
  const { id, name, location } = props.restaurant;
  return (
    <div className="tile callout cell small-4">
      <h3>
        <Link id ="restaurantName" to={`/restaurants/${id}`}>
          {name}
        </Link>
        <h5>{location}</h5>
      </h3>
    </div>
  );
};

export default RestaurantTile;
