import React from "react";
import PropTypes from "prop-types";
import { Icon, Tooltip } from "antd";

const FridgeLinks = ({ items, onClick }) => {
  return (
    <div className="fridge-links">
      {items.map((val, i) => (
        <a
          href="javascript:void(0)"
          className="mr8"
          key={val}
          onClick={() => onClick(val)}
        >
          <Tooltip title={`Fridge #${val + 1}`}>Fridge#{val + 1}</Tooltip>
        </a>
      ))}
    </div>
  );
};
FridgeLinks.propTypes = {
  onClick: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired
};

export default FridgeLinks;
