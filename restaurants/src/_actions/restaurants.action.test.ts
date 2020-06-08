import createMockStore from "redux-mock-store";
import { RestaurantsAction } from "../_types_/actions/restaurantsAction";
import thunk, { ThunkDispatch } from "redux-thunk";
import { restaurantsAction } from "../_actions/restaurants.action";
import { Restaurants } from "../_types_/Restaurants/Restaurants";
import fetchMock from "fetch-mock";
import expect from "expect";

type DispatchExts = ThunkDispatch<Restaurants, void, RestaurantsAction>;
const middleware = [thunk];
const mockStore = createMockStore<Restaurants, DispatchExts>(middleware);

describe("async action", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("creates GET RESTAURANT DATA", async () => {
    const store = mockStore();
    await store.dispatch(restaurantsAction.getRestaurantsData("restaurants"));
    const actionType = ["RESTAURANTS_LOADING", "RESTAURANTS_LOADED"];
    store.getActions().forEach((storeData: any, index: number) => {
      expect(storeData.type).toEqual(actionType[index]);
    });
  });
});
