import React from 'react';

//Components imports
import ProxyButton from './ProxyButton';
import TextButton from './TextButton';

export default function DiscardAudio({ onClick }) {
  return (
    <ProxyButton onClick={onClick}>
      <TextButton>discard</TextButton>
    </ProxyButton>
  );
}
