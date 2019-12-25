import React from 'react';

//COMPONENTS Imports
import LoadingLine from '../components/misc/LoadingLine';
import WelcomeUser from '../components/headlines/WelcomeUser';

export default {
  title: 'Loading Process'
};

export function Loading() {
  return <LoadingLine />;
}

export function Hello() {
  return <WelcomeUser userName={'Artur'} />;
}
