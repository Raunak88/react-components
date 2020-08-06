import PropTypes from "prop-types";
import React from "react";
import "./buttonbadge.scss";
export default function ButtonBadge(props) {
  return (
    <button
      className={props.kind}
      disabled={props.disabled}
      type={props.type}
      onClick={props.click}
    >
      {props.children}:{props.counter > 99 ? 99 + "+" : props.counter}
    </button>
  );
}

ButtonBadge.propTypes = {
  children: PropTypes.any,
  click: PropTypes.func,
  counter: PropTypes.number,
  disabled: PropTypes.bool,
  kind: PropTypes.string,
  type: PropTypes.string
};
