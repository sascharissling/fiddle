import React from 'react';
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
