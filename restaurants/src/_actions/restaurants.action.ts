import { restaurantsService } from "../_services_/restaurantsService";
import { Restaurants } from "../_types_/Restaurants/Restaurants";

export const restaurantsAction = {
  getRestaurantsData,
};

function getRestaurantsData(url: string) {
  return async (
    dispatch: (arg0: { type: string; payload: Restaurants[] }) => void
  ) => {
    try {
      dispatch(restaurantsLoading());
      const response = await restaurantsService.getRestaurantsData(url);
      if (response) {
        dispatch(restaurantsDataLoaded(response));
      }
    } catch (err) {
      console.log("Error:- ", err);
    }
  };
}

export function restaurantsLoading() {
  return {
    type: "RESTAURANTS_LOADING",
    payload: [],
  };
}

export function restaurantsDataLoaded(restaurantsData: Restaurants[]) {
  return {
    type: "RESTAURANTS_LOADED",
    payload: restaurantsData || [],
  };
}
