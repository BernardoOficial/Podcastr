import GlobalStyle from "../styles/global";
import { Container } from "../styles/app";

import Header from "../components/Header";
import Player from "../components/Player";
import { EpisodesProvider } from "../contexts/ContextEpisodes";


function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <GlobalStyle />

      <EpisodesProvider
        allEpisodes={pageProps.allEpisodes}
        lastReleases={pageProps.lastReleases}
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