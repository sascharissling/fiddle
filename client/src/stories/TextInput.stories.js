import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

//COMPONENTS Imports
import UserNameInput from '../components/inputs/UserNameInput';
import MessageInput from '../components/inputs/MessageInput';

export default {
  title: 'Text Inputs',
  decorators: [withKnobs]
};

export function NameInput() {
  return (
    <UserNameInput
      onChange={action('change')}
      onSubmit={action('enter')}
      placeholder={'Username'}
      value={'value'}
    />
  );
}

export function ChatMessageInput() {
  return (
    <MessageInput
      onChange={action('change')}
      onSubmit={action('enter')}
      placeholder={'Chatmessage'}
      value={'value'}
    />
  );
}
