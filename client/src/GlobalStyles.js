import React from 'react';
import { Global, css } from '@emotion/core';
import defaultTheme from './utils/defaultTheme';

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }

        ::-webkit-scrollbar {
          width: 0;
        }

        body {
          margin: 0;
          font-family: 'Montserrat', sans-serif;
          background: #000000;
          color: #f5f5f5;
        }

        input,
        button,
        a {
          &:focus {
            outline-color: ${defaultTheme.primary};
          }
        }
      `}
    />
  );
}
