import axios from "axios";
import { Restaurants } from "../_types_/Restaurants/Restaurants";
import config from "../config/index";

async function getRestaurantsData(url: string): Promise<Restaurants[]> {
  let apiEndPoint = `${config.getConfig().apihost}${url}`;
  if (!config.getConfig().apihost) {
    apiEndPoint = `http://localhost:3000/${url}`;
  }

  const restaurants = await axios.get(apiEndPoint);
  return restaurants.data;
}

export const restaurantsService = { getRestaurantsData };
