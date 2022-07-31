import { css, Global } from '@emotion/react';

export const DefaultStyles = () => (
  <Global
    styles={css`
      @import url('https://p.typekit.net/p.css?s=1&k=wrw1rqc&ht=tk&f=139.169.173.175&a=27325052&app=typekit&e=css');

      :root {
        --black: #000;
        --white: #fff;
        --red: #f32827;
        --purple: #a42ce9;
        --blue: #2d7fea;
        --yellow: #f4f73e;
        --pink: #eb30c1;
        --gold: #ffd500;
        --aqua: #2febd2;
        --gray: #282c35;
      }

      @font-face {
        font-family: 'proxima-nova';
        src: url('https://use.typekit.net/af/949f99/00000000000000003b9b3068/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3')
            format('woff2'),
          url('https://use.typekit.net/af/949f99/00000000000000003b9b3068/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3')
            format('woff'),
          url('https://use.typekit.net/af/949f99/00000000000000003b9b3068/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3')
            format('opentype');
        font-display: auto;
        font-style: normal;
        font-weight: 700;
        font-stretch: normal;
      }

      @font-face {
        font-family: 'proxima-nova';
        src: url('https://use.typekit.net/af/d82519/00000000000000003b9b306a/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n8&v=3')
            format('woff2'),
          url('https://use.typekit.net/af/d82519/00000000000000003b9b306a/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n8&v=3')
            format('woff'),
          url('https://use.typekit.net/af/d82519/00000000000000003b9b306a/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n8&v=3')
            format('opentype');
        font-display: auto;
        font-style: normal;
        font-weight: 800;
        font-stretch: normal;
      }

      @font-face {
        font-family: 'proxima-nova';
        src: url('https://use.typekit.net/af/576d53/00000000000000003b9b3066/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3')
            format('woff2'),
          url('https://use.typekit.net/af/576d53/00000000000000003b9b3066/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3')
            format('woff'),
          url('https://use.typekit.net/af/576d53/00000000000000003b9b3066/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3')
            format('opentype');
        font-display: auto;
        font-style: normal;
        font-weight: 600;
        font-stretch: normal;
      }

      @font-face {
        font-family: 'proxima-nova';
        src: url('https://use.typekit.net/af/705e94/00000000000000003b9b3062/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3')
            format('woff2'),
          url('https://use.typekit.net/af/705e94/00000000000000003b9b3062/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3')
            format('woff'),
          url('https://use.typekit.net/af/705e94/00000000000000003b9b3062/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3')
            format('opentype');
        font-display: auto;
        font-style: normal;
        font-weight: 400;
        font-stretch: normal;
      }

      html {
        box-sizing: border-box;
        font-family: 'proxima-nova', sans-serif;
      }

      html,
      body,
      #root {
        height: 100%;
      }

      body {
        margin: 0;
        background: var(--black);
        color: var(--white);
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }
    `}
  />
);
