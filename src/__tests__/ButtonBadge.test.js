import React from "react";
import { shallow } from "enzyme";
import ButtonBadge from "../ButtonBadge/ButtonBadge";

it("renders a button correctly", () => {
  const wrapped = shallow(<ButtonBadge />);
  expect(wrapped.find("button").length).toEqual(1);
});
