import React from 'react';
import { Global, css } from '@emotion/core';

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: 'Montserrat', sans-serif;
          background: #000000;
          color: #f5f5f5;
        }
      `}
    />
  );
}

//FONTS
// font-family: 'Montserrat', sans-serif;
// font-family: 'Montserrat Alternates', sans-serif;
