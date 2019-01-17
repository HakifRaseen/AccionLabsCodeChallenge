import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { DataTable } from "./index";

Enzyme.configure({ adapter: new Adapter() });
//toMatchSnapshot() is not working in codesandbox
it("Data Table Rendering", () => {
  const wrapper = shallow(<DataTable />);
  expect(wrapper).toMatchSnapshot();
});
