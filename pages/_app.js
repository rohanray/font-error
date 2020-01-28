import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pangram';
    src: url('/static/fonts/Pangram-Regular.ttf');
    src: url('/static/fonts/Pangram-Bold.ttf');
    src: url('/static/fonts/Pangram-Black.ttf');
    src: url('/static/fonts/Pangram-ExtraLight.ttf');
  }
`;

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
