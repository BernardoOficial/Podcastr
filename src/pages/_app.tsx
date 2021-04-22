import GlobalStyle from "../styles/global";
import { Container } from "../styles/app";

import Header from "../components/Header";
import Player from "../components/Player";
import { EpisodesProvider } from "../contexts/ContextEpisodes";


function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <GlobalStyle />

      {console.log(pageProps)}

      <EpisodesProvider
        episodes={pageProps.episodes}
      >
        <section>
          <Header />
          <Component {...pageProps} />
        </section>

        <Player />
      </EpisodesProvider>
    </Container>
  );
}

export default MyApp;