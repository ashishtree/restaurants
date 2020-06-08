import {
  RestaurantsData,
  Restaurants,
} from "../_types_/Restaurants/Restaurants";
import { RestaurantsAction } from "../_types_/actions/restaurantsAction";

const initialState: RestaurantsData = {
  status: "LOADING",
  restaurantData: [],
};

export default (
  state = initialState,
  action: RestaurantsAction
): RestaurantsData => {
  switch (action.type) {
    case "RESTAURANTS_LOADING":
      return {
        ...state,
        status: "LOADING",
        restaurantData: [],
      };
    case "RESTAURANTS_LOADED":
      const restaurantData = (action as RestaurantsAction).payload.map(
        (restaurants: Restaurants): Restaurants => restaurants
      );
      return {
        ...state,
        status: "LOADED",
        restaurantData,
      };
    default:
      return state;
  }
};
