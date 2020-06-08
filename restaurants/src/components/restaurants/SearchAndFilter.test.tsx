import * as React from "react";
import Enzyme from "enzyme";
import { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SearchAndFilter from "./SearchAndFilter";
import * as ShallowRenderer from "react-test-renderer/shallow";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    searchRestaurants: jest.fn(),
    filterRestaurants: jest.fn(),
    selectedFilter: "status",
  };
  const mockStore = configureStore();
  const store = mockStore({});

  const myShallowRenderer = ShallowRenderer.createRenderer();

  const wrapper = myShallowRenderer.render(
    <Provider store={store}>
      <SearchAndFilter {...props} />
    </Provider>
  );

  const domWrapper = mount(<SearchAndFilter {...props} />);

  return {
    props,
    wrapper,
    domWrapper,
  };
}

describe("SearchAndFilter Component Render", () => {
  describe("SearchAndFilter Component Render", () => {
    it("should render SearchAndFilter Component", () => {
      const { wrapper } = setup();
      expect(wrapper).toMatchSnapshot();
    });

    it("when simulating a change, select for filter should update its value", () => {
      const { domWrapper } = setup();
      domWrapper
        .find("select")
        .simulate("change", { target: { value: "status" } });
      expect(domWrapper.find("select").props().value).toBe("status");
    });
  });
});
