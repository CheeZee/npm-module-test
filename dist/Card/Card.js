import React from 'react';
import './Card.css';

const Card = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, props.children);
};

export default Card;