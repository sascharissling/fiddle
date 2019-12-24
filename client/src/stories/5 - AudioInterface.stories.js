import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

//COMPONENTS imports
import FiddleButton from '../components/buttons/FiddleButton';
import RecordButton from '../components/buttons/RecordButton';
import PlayButton from '../components/buttons/PlayButton';
import StopButton from '../components/buttons/StopButton';
import PauseButton from '../components/buttons/PauseButton';
import SendAudio from '../components/buttons/SendAudio';
import DiscardAudio from '../components/buttons/DiscardAudio';

export default {
  title: 'Audio Actions',
  decorators: [withKnobs]
};

//Button leads to where a new audio file can be recorded
export function GoFiddle() {
  return <FiddleButton onClick={action('clicked')} />;
}

export function Record() {
  return <RecordButton onClick={action('clicked')} />;
}

export function Play() {
  return <PlayButton onClick={action('clicked')} />;
}

export function Pause() {
  return <PauseButton onClick={action('clicked')} />;
}

export function Stop() {
  return <StopButton onClick={action('clicked')} />;
}

export function Send() {
  return <SendAudio onClick={action('clicked')} />;
}

export function Discard() {
  return <DiscardAudio onClick={action('clicked')} />;
}
