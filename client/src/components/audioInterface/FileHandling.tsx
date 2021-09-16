import styled from 'styled-components';
import { SendAudio } from '../buttons/SendAudio';
import { DiscardAudio } from '../buttons/DiscardAudio';

const FileHandlingDisplay = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  margin-top: 1.875rem;
  width: 100vw;
  div {
    display: flex;
    justify-content: center;
    width: 50%;
  }
`;

export default function FileHandling({ handleDelete, handleSend }) {
  return (
    <FileHandlingDisplay>
      <div>
        <DiscardAudio onClick={handleDelete} />
      </div>
      <div>
        <SendAudio onClick={handleSend} />
      </div>
    </FileHandlingDisplay>
  );
}
