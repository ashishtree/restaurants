import * as React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Nav from "./Nav";
import * as ShallowRenderer from "react-test-renderer/shallow";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const mockStore = configureStore();
  const store = mockStore({});

  const myShallowRenderer = ShallowRenderer.createRenderer();

  const wrapper = myShallowRenderer.render(
    <Provider store={store}>
      <Nav />
    </Provider>
  );

  return {
    wrapper,
  };
}

describe("Nav Component Render", () => {
  describe("Nav Component Render", () => {
    it("should render Nav Component", () => {
      const { wrapper } = setup();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
