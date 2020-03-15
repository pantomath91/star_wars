import React from "react";
import { shallow, mount } from "enzyme";
import chai, { expect } from "chai";
import store from "../../../shared/store";
import Timer from "../timer.js";

it("<Timer /> :: render test", () => {
  const wrapper = shallow(<Timer />);
  expect(wrapper).to.have.lengthOf(1);
});
