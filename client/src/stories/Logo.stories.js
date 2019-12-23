import React from 'react';

//COMPONENTS Imports
import FiddleLogo from '../components/FiddleLogo';
import FiddleSmallLogo from '../components/FiddleSmallLogo';

export default {
  title: 'Fiddle Logos'
};

export function BrandLogo() {
  return <FiddleLogo />;
}

export function SmallLogo() {
  return <FiddleSmallLogo />;
}
