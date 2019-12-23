import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

//COMPONENTS Imports
import UserNameInput from '../components/UserNameInput';
import MessageInput from '../components/MessageInput';

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
    >
      {text('Input', 'Value')}
    </UserNameInput>
  );
}

export function ChatMessageInput() {
  return (
    <MessageInput
      onChange={action('change')}
      onSubmit={action('enter')}
      placeholder={'Chatmessage'}
      value={'value'}
    >
      {text('Input', 'Value')}
    </MessageInput>
  );
}
