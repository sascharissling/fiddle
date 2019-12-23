import React from 'react';

//COMPONENTS Imports
import FiddleLogo from '../components/branding/FiddleLogo';
import FiddleSmallLogo from '../components/branding/FiddleSmallLogo';

export default {
  title: 'Fiddle Logos'
};

export function BrandLogo() {
  return <FiddleLogo />;
}

export function SmallLogo() {
  return <FiddleSmallLogo />;
}
