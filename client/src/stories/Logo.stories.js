import React from 'react';
import { action } from '@storybook/addon-actions';

//COMPONENTS Imports
import FiddleLogo from '../components/FiddleLogo';

export default {
  title: 'Fiddle Logo'
};

export function Logo() {
  return <FiddleLogo />;
}
