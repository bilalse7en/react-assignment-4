import React from 'react';
import { Button as PrimeButton } from 'primereact/button';
import PropTypes from 'prop-types';

function Button({ text, onClick, icon, className }) {
  return (
    <PrimeButton
      label={text}
      icon={icon}
      className={className}
      onClick={onClick}
    />
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string,
  className: PropTypes.string,
};

export default Button;