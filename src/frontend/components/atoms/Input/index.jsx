import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Input = ({
  name, type, placeholder, handleInput,
}) => (
  <input
    name={name}
    className="input"
    type={type}
    placeholder={placeholder}
    onChange={handleInput}
  />
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
};

export default Input;
