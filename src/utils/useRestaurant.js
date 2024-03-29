import { useState, useEffect } from "react";
import { FETCH_MENU_URL, FETCH_MENU_URL_NGP } from "../utils/Constant";

const useRestaurant = (resId) => {
  const [restaurant, setRestauraunt] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
    console.log("custom hook useeffecteffect")
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL_NGP + resId);
    // const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();
    setRestauraunt(json.data);
  

  }

  return restaurant;
};

export default useRestaurant;
