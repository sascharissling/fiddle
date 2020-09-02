import { keyframes } from '@emotion/core';

export const changeWidth = keyframes`
from {
  width: 0.375rem;
}
to {
  width: 8.4375rem;
}
`;

export const changeWidthLong = keyframes`
from {
  width: 0vw;
}
to {
  width: 100vw;
}
`;

export const zoomInOut = keyframes`
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

export const fadeIn = keyframes`
  from {
    opacity: 0;
    }
  to {
    opacity: 1;
    }
`;
