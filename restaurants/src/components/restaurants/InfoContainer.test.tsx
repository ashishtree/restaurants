import * as React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import InfoContainer from "./InfoContainer";
import RestaurantMockData from "../../__mockData__/mockRestaurants.json";
import * as ShallowRenderer from "react-test-renderer/shallow";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    doFavorite: jest.fn(),
    restaurantData: RestaurantMockData,
    selectedFilter: "shortStatusName",
  };
  const mockStore = configureStore();
  const store = mockStore({});

  const myShallowRenderer = ShallowRenderer.createRenderer();

  const wrapper = myShallowRenderer.render(
    <Provider store={store}>
      <InfoContainer {...props} />
    </Provider>
  );

  return {
    props,
    wrapper,
  };
}

describe("InfoContent Component Render", () => {
  describe("InfoContent Component Render", () => {
    it("should render InfoContent Component", () => {
      const { wrapper } = setup();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
