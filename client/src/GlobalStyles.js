import { createGlobalStyle } from 'styled-components';
import defaultTheme from './utils/defaultTheme';

const FiddleGlobalStyles = createGlobalStyle`
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
`;

export default FiddleGlobalStyles;
