import PropTypes from 'prop-types';
import React, { MutableRefObject, RefObject, useEffect, useRef, useState } from 'react';
import { ReactMic } from 'react-mic';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import WaveSurfer from 'wavesurfer.js';
import MicrophonePlugin from 'wavesurfer.js/dist/plugin/wavesurfer.microphone.min.js';

import { uploadAudio } from '../../api/chats';
import { getThemeGradient } from '../../utils/getThemeGradient';
import { RecordButton } from '../buttons/RecordButton';
import { StopButton } from '../buttons/StopButton';

type WaveFormType = {
  ref: RefObject<HTMLDivElement>;
};

const PlaybackWaveform = styled.div<WaveFormType>`
  width: 90vw;
  height: 6.25rem;
  border-radius: 1rem;
`;

const RecordingWaveform = styled.div<WaveFormType>`
  width: 90vw;
  height: 16.25rem;
  border-radius: 1rem;
`;

const Mic = styled(ReactMic)`
  opacity: 0;
  height: 0;
  width: 0;
`;

export function OverdubFiddle({ originalAudioFileUrl, chatId }) {
  const author = sessionStorage.getItem('userName');
  const [playbackWaveSurfer, setPlaybackWaveSurfer] = useState<WaveSurfer>();
  const [recordingWaveSurfer, setRecordingWaveSurfer] = useState<WaveSurfer>();
  const [isRecording, setIsRecording] = useState(false);
  const [newAudioFileUrl, setNewAudioFileUrl] = useState('');
  const [twoRecordings, setTwoRecordings] = useState(false);

  //PLAYBACK WaveSurfer
  const playbackWaveformRef = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (playbackWaveformRef.current) {
      const activeWaveColor = '#f5f5f5';
      const playedWaveColor = '#707070';
      const wavesurfer = WaveSurfer.create({
        container: playbackWaveformRef.current,
        barWidth: 5,
        cursorWidth: 2,
        waveColor: activeWaveColor,
        progressColor: playedWaveColor,
        hideScrollbar: true,
        autoCenter: false,
        responsive: true,
        barHeight: 10,
        height: 80,
        interact: true,
        maxCanvasWidth: 2000
      });
      wavesurfer.load(originalAudioFileUrl);
      wavesurfer.on('finish', function() {
        wavesurfer.stop();
      });
      setPlaybackWaveSurfer(wavesurfer);
    }
  }, [originalAudioFileUrl]);

  //RECORDING WaveSurfer
  const recordingWaveformRef = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (recordingWaveformRef.current) {
      const themeGradient = getThemeGradient();
      const wavesurfer = WaveSurfer.create({
        container: recordingWaveformRef.current,
        barWidth: 5,
        barHeight: 10,
        cursorWidth: 0,
        waveColor: themeGradient,
        hideScrollbar: true,
        autoCenter: true,
        responsive: true,
        interact: false,
        height: 260,
        maxCanvasWidth: 2000,
        fillParent: true,
        plugins: [MicrophonePlugin.create()]
      });
      wavesurfer.microphone.on('deviceReady', function(stream) {
        console.log('Device ready!', stream);
      });
      wavesurfer.microphone.on('deviceError', function(code) {
        console.warn('Device error: ' + code);
      });
      setRecordingWaveSurfer(wavesurfer);
    }
  }, []);

  function handleData(recordedBlob) {
    console.log('chunk of real-time data is: ', recordedBlob);
  }

  function startRecording() {
    playbackWaveSurfer && playbackWaveSurfer.play();
    recordingWaveSurfer && recordingWaveSurfer.microphone.start();
    setIsRecording(true);
  }

  function stopRecording() {
    recordingWaveSurfer && recordingWaveSurfer.microphone.stop();
    setIsRecording(false);
  }

  async function handleStop(recordedBlob) {
    const file_reader = new FileReader();
    const dateOfRecording = Date.now();
    file_reader.readAsDataURL(recordedBlob.blob);
    file_reader.onloadend = async function() {
      const base64_string = file_reader.result;
      await uploadAudio(base64_string, author, chatId, dateOfRecording);
      return base64_string;
    };
    setNewAudioFileUrl(
      `https://res.cloudinary.com/fiddle/video/upload/${chatId}-${dateOfRecording}-${author}.webm`
    );
    setTimeout(() => setTwoRecordings(true), 800);
  }

  return (
    <>
      <PlaybackWaveform ref={playbackWaveformRef} />
      <RecordingWaveform ref={recordingWaveformRef} />
      <Mic record={isRecording} onStop={handleStop} onData={handleData} mimeType="audio/webm" />
      {!isRecording && <RecordButton onClick={startRecording} />}
      {isRecording && <StopButton onClick={stopRecording} />}
      {twoRecordings && (
        <Redirect
          to={`/chats/${chatId}/consolidate/${originalAudioFileUrl.slice(
            47
          )}/${newAudioFileUrl.slice(47)}`}
        />
      )}
    </>
  );
}

OverdubFiddle.propTypes = {
  originalAudioFileUrl: PropTypes.string,
  chatId: PropTypes.string
};
