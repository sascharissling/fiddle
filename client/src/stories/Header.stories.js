import React from 'react';
import { action } from '@storybook/addon-actions';

//COMPONENTS Imports
import HeaderBar from '../components/HeaderBar';
import BackButton from '../components/BackButton';
import NewChatButton from '../components/NewChatButton';

export default {
  title: 'Navigation'
};

export function ChatsNavigation() {
  return (
    <HeaderBar>
      <BackButton onClick={action('clicked')} />
      <NewChatButton onClick={action('clicked')} />
    </HeaderBar>
  );
}
