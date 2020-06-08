import * as React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Footer from "./Footer";
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
      <Footer />
    </Provider>
  );

  return {
    wrapper,
  };
}

describe("Footer Component Render", () => {
  describe("Footer Component Render", () => {
    it("should render Footer Component", () => {
      const { wrapper } = setup();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
