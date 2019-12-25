import React from 'react';

//Components imports
import ProxyButton from './ProxyButton';
import TextButton from './TextButton';

export default function SendAudio({ onClick }) {
  return (
    <ProxyButton onClick={onClick}>
      <TextButton>send</TextButton>
    </ProxyButton>
  );
}
