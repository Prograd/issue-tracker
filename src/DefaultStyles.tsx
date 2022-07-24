import { css, Global } from '@emotion/react';

export const DefaultStyles = () => (
  <Global
    styles={css`
      html {
        box-sizing: border-box;
      }

      html,
      body,
      #root {
        height: 100%;
      }

      body {
        margin: 0;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }
    `}
  />
);
