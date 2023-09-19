import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/Constant";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = useRestaurant(resId);
  console.log("menu", restaurant);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex">
      {console.log("component")}
      <div>
        <h1>Restraunt id: {resId}</h1>
        <h2>{restaurant?.cards[0].card.card.info.name}</h2>
        <img
          src={
            IMG_CDN_URL + restaurant?.cards[0].card.card.info.cloudinaryImageId
          }
        />
        <h3>{restaurant?.cards[0].card.card.info.area}</h3>
        <h3>{restaurant?.cards[0].card.card.info.city}</h3>
        <h3>{restaurant?.cards[0].card.card.info.avgRating} stars</h3>
        <h3>{restaurant?.cards[0].card.card.info.costForTwoMsg}</h3>
      </div>
      <div className="p-5">
        <h1>Menu</h1>
        <h3>hello</h3>
        {/* <div>
          {restaurant.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card?.itemCards.map(
            (item) => {
              return <div>{item?.card?.info?.name}</div>;
            }
          )}
        </div> */}

        <ul data-testid="menu">
          {restaurant.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card?.itemCards.map(
            (item) => {
              return (
                <li key={item?.card?.info?.id}>
                  <p>
                    {item?.card?.info?.name} - {item?.card?.info?.category} -{" "}
                    {item?.card?.info?.price} -{" "}
                  </p>

                  <button
                    data-testid="addBtn"
                    className="p-1 bg-green-50"
                    onClick={() => addFoodItem(item?.card?.info)}
                  >
                    Add
                  </button>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
