"use client"

import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ id, value, isFlipped, handleClick }) => {
  return (
    <div
      className={`card2 ${isFlipped ? 'flipped' : ''} ${isFlipped ? 'matched' : ''}`}
      onClick={() => !isFlipped && handleClick(id, value)}
    >
      <span>{isFlipped ? value : ''}</span>
    </div>
  );
};


Card.propTypes = {
  id: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  isFlipped: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Card;