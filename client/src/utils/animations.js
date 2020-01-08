import { keyframes } from '@emotion/core';

export const changeWidth = keyframes`
from {
  width: 5px;
}
to {
  width: 135px;
}
`;

export const changeWidthLong = keyframes`
from {
  width: 0vw;
}
to {
  width: 85vw;
}
`;

export const buttonFeedback = keyframes`
  0%{
    zoom: 1;
  }
  50%{
    zoom: 0.95;
  }
  100%{
    zoom: 1;
  }
`;
