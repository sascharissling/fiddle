import React from 'react';
import { action } from '@storybook/addon-actions';
import HeaderBar from '../components/layout/HeaderBar';
import BackButton from '../components/buttons/BackButton';
import NewChatButton from '../components/buttons/NewChatButton';

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
