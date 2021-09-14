import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';

const LinkedMenuItem = ({
  active,
  name,
  label,
  linkTo,
  iconName,
  padding,
  ...rest
}) => (
  <Link
    {...rest}
    to={linkTo}
    style={{
      textDecoration: 'none',
      paddingLeft: padding,
      paddingRight: padding,
    }}
  >
    {/* <Header color="gray" size="small" as="a" content={label} /> */}
    <Header textAlign="center" as="span" size="small" inverted>
      {label}
    </Header>
  </Link>
);

LinkedMenuItem.propTypes = {
  linkTo: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  padding: PropTypes.string,
};

LinkedMenuItem.defaultProps = {
  color: 'white',
  size: 'small',
};

export default LinkedMenuItem;
