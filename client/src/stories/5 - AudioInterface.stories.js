import React from 'react';
import { action } from '@storybook/addon-actions';
import FiddleButton from '../components/buttons/FiddleButton';
import RecordButton from '../components/buttons/RecordButton';
import PlayButton from '../components/buttons/PlayButton';
import StopButton from '../components/buttons/StopButton';
import PauseButton from '../components/buttons/PauseButton';
import SendAudio from '../components/buttons/SendAudio';
import DiscardAudio from '../components/buttons/DiscardAudio';
import NoAudioYet from '../components/headlines/NoAudioYet';
import FiddleDisplay from '../components/audioInterface/FiddleDisplay';
import InitialAudioRecording from '../components/audioInterface/InitialAudioRecording';
import OverdubFiddle from '../components/audioInterface/OverdubFiddle';
import ConsolidatedFiddle from '../components/audioInterface/ConsolidatedFiddle';

export default {
  title: 'Audio Actions'
};

export function GoFiddle() {
  return <FiddleButton onClick={action('clicked')} />;
}

export function BeforeRecording() {
  return <NoAudioYet />;
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

export function FiddlePlayback() {
  return <FiddleDisplay />;
}

export function RecordFiddle() {
  return <InitialAudioRecording />;
}

export function Overdub() {
  return <OverdubFiddle />;
}

export function Consolidated() {
  return <ConsolidatedFiddle />;
}
