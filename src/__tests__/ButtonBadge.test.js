import React from "react";
import { mount } from "enzyme";
import ButtonBadge from "../ButtonBadge/ButtonBadge";

describe("ButtonBadge tests", () => {
  it("renders a button correctly when props are not passed", () => {
    const wrapped = mount(<ButtonBadge />);
    expect(wrapped.find("button").length).toEqual(1);
  });

  it("renders a button correctly when children is passed", () => {
    const wrappedWithProps = mount(<ButtonBadge children="Press me" />);
    expect(wrappedWithProps.find("button").length).toEqual(1);
    expect(wrappedWithProps.text()).toEqual("Press me");
  });

  it("renders a button correctly when kind is passed", () => {
    const wrappedWithProps = mount(
      <ButtonBadge kind="primary" children="Press me" />
    );
    expect(wrappedWithProps.find("button").hasClass("primary")).toEqual(true);
  });
  it("renders a button correctly with counter when count < 99", () => {
    const wrappedWithProps = mount(
      <ButtonBadge counter={99} children="Press me" />
    );
    expect(wrappedWithProps.find("button").length).toEqual(1);
    expect(wrappedWithProps.text()).toEqual("Press me : " + 99);
  });

  it("renders a button correctly with counter when count > 99", () => {
    const wrappedWithProps = mount(
      <ButtonBadge counter={101} children="Press me" />
    );
    expect(wrappedWithProps.find("button").length).toEqual(1);
    expect(wrappedWithProps.text()).toEqual("Press me : 99+");
  });

  it("renders a disabled button when disabled props is passed", () => {
    const mockOnClick = jest.fn();
    const wrappedWithProps = mount(
      <ButtonBadge
        counter={101}
        disabled={true}
        click={mockOnClick}
        children="Press me"
      />
    );
    wrappedWithProps.find("button").simulate("click");
    expect(mockOnClick).toHaveBeenCalledTimes(0);
  });

  it("button calls the passed function on when click props is passed", () => {
    const mockOnClick = jest.fn();
    const wrappedWithProps = mount(
      <ButtonBadge counter={101} click={mockOnClick} children="Press me" />
    );
    wrappedWithProps.find("button").simulate("click");
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
