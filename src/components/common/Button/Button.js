import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({
  children,
  favorite,
  compare,
  variant,
  noHover,
  className: propClassName,
  ...props
}) => {
  const classes = [];

  if (favorite) classes.push(styles.active);
  if (compare) classes.push(styles.active);

  if (propClassName) classes.push(propClassName);

  if (variant) classes.push(styles[variant]);
  else classes.push('main');

  let Comp = 'a';

  if (noHover) {
    classes.push(styles.noHover);
    Comp = 'div';
  }

  return (
    <Comp href='#' {...props} className={classes.join(' ')}>
      {children}
    </Comp>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  noHover: PropTypes.bool,
  favorite: PropTypes.bool,
  compare: PropTypes.bool,
  className: PropTypes.string,
  variant: PropTypes.string,
};

export default Button;
