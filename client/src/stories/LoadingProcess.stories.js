import React from 'react';

//COMPONENTS Imports
import LoadingLine from '../components/LoadingLine';
import WelcomeUser from '../components/WelcomeUser';

export default {
  title: 'Loading Process'
};

export function Loading() {
  return <LoadingLine />;
}

export function Hello() {
  return <WelcomeUser userName={'Artur'} />;
}
