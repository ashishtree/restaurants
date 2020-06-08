import reducer from "../_reducers/restaurants.reducers";
import restaurantData from "../__mockData__/mockRestaurants.json";

describe("Restaurant Reducer", () => {
  it("it should rander initial restaurant state", () => {
    expect(
      reducer(
        {
          status: "LOADING",
          restaurantData: [],
        },
        {
          payload: [],
          type: "RESTAURANTS_LOADING",
        }
      )
    ).toEqual({
      status: "LOADING",
      restaurantData: [],
    });
  });

  it("it should return the successfull restaurant state", () => {
    expect(
      reducer(
        {
          status: "LOADED",
          restaurantData: [],
        },
        {
          payload: restaurantData,
          type: "RESTAURANTS_LOADED",
        }
      )
    ).toEqual({
      status: "LOADED",
      restaurantData,
    });
  });
});
