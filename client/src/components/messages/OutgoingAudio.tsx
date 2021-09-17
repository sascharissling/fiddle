import { MessageWrapperOut } from './MessageWrapperOut';
import { ChatWaveFormDisplay } from './ChatWaveFormDisplay';

type OutgoingAudioProps = {
  onClick: () => void,
  audioFileUrl: string
};

export function OutgoingAudio({ onClick, audioFileUrl }: OutgoingAudioProps) {
  return (
    <MessageWrapperOut onClick={onClick}>
      <ChatWaveFormDisplay audioFileUrl={audioFileUrl} />
    </MessageWrapperOut>
  );
}
