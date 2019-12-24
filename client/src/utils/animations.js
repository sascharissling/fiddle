import { keyframes } from '@emotion/core';

export const changeWidth = keyframes`
from {
  width: 20px;
}
to {
  width: 150px;
}
`;

// export const hoverRight = keyframes`
//   0% {
//     padding-left: 0px;
//   }
//   50% {
//     padding-left: 2px;
//   }
//   100%{
//     padding-left: 0px;
//   }
// `;
export const buttonFeedback = keyframes`
  0% {
    zoom: 1;
  }
  50% {
    zoom: 0.95;
  }
  100%{
    zoom: 1;
  }
`;
