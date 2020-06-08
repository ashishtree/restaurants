import * as React from "react";
import * as Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

const { shallow, configure } = Enzyme;
configure({ adapter: new Adapter() });

describe("First React component test with Enzyme", () => {
  it("render without crashing", () => {
    shallow(<App />);
  });
});
