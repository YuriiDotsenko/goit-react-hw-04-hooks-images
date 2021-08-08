import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onButton }) => (
  <button className="Button" type="button" onClick={onButton}>
    Load more
  </button>
);

Button.propTypes = {
  onButton: PropTypes.func.isRequired,
};

export default Button;
