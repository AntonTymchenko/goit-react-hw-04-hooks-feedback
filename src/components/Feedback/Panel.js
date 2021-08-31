import PropTypes from "prop-types";
import React from "react";

const Panel = ({ title, children }) => (
  <div>
    <h2>{title}</h2>
    {children}
  </div>
);

Panel.defaultProps = {
  title: "",
  children: [],
};
Panel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
export default Panel;
