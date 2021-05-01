// Existem 3 formas de consumir dados de uma API

// import { useEffect, useState } from "react"

// Forma em SPA (Simple Page Application)
// Forma em SSR (Server Side Rendering)
// Forma em SSG (Static Site Generation)

import { format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { api } from "../services/axios";

import LastReleases from "../components/LastReleases";
import AllEpisodes from "../components/AllEpisodes";
import { convertNumberToHour } from "../utils/convertNumberToHour";

export default function Home(props) {
  

  // UTILIZANDO NA FORMA DE SPA
  // const [episodes, setEpisodes] = useState([]);

  // useEffect(() => {

  //   console.log('Oi do useEffect');

  //   fetch("http://localhost:3333/episodes")
  //     .then(response => response.json())
  //     .then(newEpisodes => setEpisodes(newEpisodes))
  //     .catch(error => console.log(error))
    
  // }, [])

  return (
    <main>

      <LastReleases />

      <AllEpisodes />

      {console.log('Oi do jsx')}

    </main>
  )
}

// UTILIZANDO NA FORMA DE SSR
export async function getStaticProps() {

  const { data } = await api.get('/episodes', {
    params: {
      _limit: 12,
      _sort: "published_at",
      _order: "desc"
    }
  })
  
  const episodes = data.map(episode => {
    return {
      id: episode.id,
      title: episode.title,
      members: episode.members,
      thumbnail: episode.thumbnail,
      fileUrl: episode.file.url,
      duration: Number(episode.file.duration),
      durationString: convertNumberToHour(Number(episode.file.duration)),
      publishedAt: format(parseISO(episode.published_at), "d MMM yy", { locale: ptBR }),
    };
  })

  const lastReleases = episodes.slice(0, 2);
  const allEpisodes = episodes.slice(2, episodes.length);

  return {
    props: {
      lastReleases,
      allEpisodes,
    },
    revalidate: 60 * 60 * 8, // 8 horas
  };
}

// UTILIZANDO NA FORMA DE SSG
// export async function getServerSideProps() {
    
//     const response = await fetch("http://localhost:3333/episodes");
//     const episodes = await response.json();

//     return {
//       props: {
//         episodes: episodes,
//       },
//       revalidate: 60 * 60 * 8,
//     }
// }