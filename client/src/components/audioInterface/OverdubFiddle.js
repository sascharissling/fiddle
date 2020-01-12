import React from 'react';
import styled from '@emotion/styled';
import WaveSurfer from 'wavesurfer.js';
import MicrophonePlugin from 'wavesurfer.js/dist/plugin/wavesurfer.microphone.min.js';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { ReactMic } from 'react-mic';
import { uploadAudio } from '../../api/chats';

//COMPONENTS imports
import RecordButton from '../buttons/RecordButton';
import StopButton from '../buttons/StopButton';
import getThemeGradient from '../../utils/getThemeGradient';

//STYLE start
const PlaybackWaveform = styled.div`
  width: 90vw;
  height: 100px;
  border-radius: 15px;
`;

const RecordingWaveform = styled.div`
  width: 90vw;
  height: 260px;
  border-radius: 15px;
`;

const Mic = styled(ReactMic)`
  opacity: 0;
  height: 0;
  width: 0;
`;

//STYLE end

export default function OverdubFiddle({ originalAudioFileUrl, chatId }) {
  const author = sessionStorage.getItem('userName');
  const [playbackWaveSurfer, setPlaybackWaveSurfer] = React.useState();
  const [recordingWaveSurfer, setRecordingWaveSurfer] = React.useState();
  const [isRecording, setIsRecording] = React.useState(false);
  const [newAudioFileUrl, setNewAudioFileUrl] = React.useState('');
  const [twoRecordings, setTwoRecordings] = React.useState(false);

  //PLAYBACK WaveSurfer
  const playbackWaveformRef = React.useRef();

  React.useEffect(() => {
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
        width: 100,
        barHeight: 2,
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
  const recordingWaveformRef = React.useRef();

  React.useEffect(() => {
    if (recordingWaveformRef.current) {
      const themeGradient = getThemeGradient();
      const wavesurfer = WaveSurfer.create({
        container: recordingWaveformRef.current,
        barWidth: 5,
        barHeight: 2,
        cursorWidth: 0,
        waveColor: themeGradient,
        hideScrollbar: true,
        autoCenter: true,
        responsive: true,
        interact: false,
        width: 100,
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
    playbackWaveSurfer.play();
    recordingWaveSurfer.microphone.start();
    setIsRecording(true);
  }

  function stopRecording() {
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
    setTimeout(() => setTwoRecordings(true), 500);
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
