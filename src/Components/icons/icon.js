import React from 'react';
import PropTypes from 'prop-types';
import {
  IconGitHub,
  IconInstagram,
  IconLinkedin,
} from 'Components/icons';

const Icon = ({ name }) => {
  console.log(name)
  switch (name) {
    case 'GitHub':
      return <IconGitHub />;
    case 'Instagram':
      return <IconInstagram />;
    case 'Linkedin':
      return <IconLinkedin />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;