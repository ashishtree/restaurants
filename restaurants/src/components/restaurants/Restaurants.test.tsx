import * as React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RestaurantComponent from "./Restaurants";
import RestaurantMockData from "../../__mockData__/mockRestaurants.json";
import * as ShallowRenderer from "react-test-renderer/shallow";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    getRestaurantsData: jest.fn(),
    searchRestaurants: jest.fn(),
    status: "LOADING",
    RestaurantsData: RestaurantMockData,
  };
  const mockStore = configureStore();
  const store = mockStore({});

  const myShallowRenderer = ShallowRenderer.createRenderer();

  const wrapper = myShallowRenderer.render(
    <Provider store={store}>
      <RestaurantComponent {...props} />
    </Provider>
  );

  return {
    props,
    wrapper,
  };
}

describe("Restaurant Component Render", () => {
  describe("Restaurant Component Render", () => {
    it("should render Restaurant Component", () => {
      const { wrapper } = setup();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
