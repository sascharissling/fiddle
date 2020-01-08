import React from 'react';
import styled from '@emotion/styled';
import WaveSurfer from 'wavesurfer.js';
import MicrophonePlugin from 'wavesurfer.js/dist/plugin/wavesurfer.microphone.min.js';
import linGrad from '../../utils/gradient';

//STYLE start
const Waveform = styled.div`
  width: 90vw;
  height: 350px;
  margin-bottom: 20px;
`;
//STYLE end

export default function RecordNewFiddle() {
  const waveformRef = React.useRef();

  React.useEffect(() => {
    if (waveformRef.current) {
      const wavesurfer = WaveSurfer.create({
        container: waveformRef.current,
        barWidth: 5,
        barHeight: 9,
        cursorWidth: 0,
        waveColor: linGrad,
        hideScrollbar: true,
        autoCenter: false,
        responsive: true,
        interact: false,
        width: 100,
        height: 350,
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
      wavesurfer.microphone.start();
    }
  }, []);
  return <Waveform ref={waveformRef} />;
}
