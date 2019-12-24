import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

//COMPONENTS imports
import FiddleButton from '../components/buttons/FiddleButton';
import IncomingMessage from '../components/messages/IncomingMessage';
import OutgoingMessage from '../components/messages/OutgoingMessage';
import IncomingAudio from '../components/messages/IncomingAudio';
import OutgoingAudio from '../components/messages/OutgoingAudio';

export default {
  title: 'Chat Objects',
  decorators: [withKnobs]
};

//Button leads to where a new audio file can be recorded
export function GoFiddle() {
  return <FiddleButton onClick={action('clicked')} />;
}

export function TextIncoming() {
  return <IncomingMessage incomingText={'Hello rocker'} />;
}

export function TextOutgoing() {
  return <OutgoingMessage outgoingText={'Hello axegrinder'} />;
}

export function AudioIncoming() {
  return <IncomingAudio onClick={action('clicked')} />;
}

export function AudioOutgoing() {
  return <OutgoingAudio onClick={action('clicked')} />;
}
