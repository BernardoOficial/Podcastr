import GlobalStyle from "../styles/global";
import { Container } from "../styles/app";

import Header from "../components/Header";
import Player from "../components/Player";


function MyApp({ Component, pageProps }) {
  return (
    <Container>
      
      <GlobalStyle />

      <section>
        <Header />
        <Component {...pageProps} />
      </section>

      <Player />

    </Container>
  );
}

export default MyApp;
