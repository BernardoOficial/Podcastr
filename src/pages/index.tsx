// Existem 3 formas de consumir dados de uma API

// import { useEffect, useState } from "react"

// Forma em SPA (Simple Page Application)
// Forma em SSR (Server Side Rendering)
// Forma em SSG (Static Site Generation)

import { api } from "../components/services/axios";
import { format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import LastReleases from "../components/LastReleases";
import AllEpisodes from "../components/AllEpisodes";

interface EpisodesFileType {
  url: string,
  type: string,
  duration: number
}

interface EpisodesType {
  id: string,
  title: string,
  members: string,
  published_at: string,
  thumbnail: string,
  description: string,
  file: EpisodesFileType
}

interface HomeProps {
  episodes: EpisodesType[]
}

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
      {/* {episodes.map((episode, index) => <h1 key={index}>{episode.id}</h1>)} */}
      {/* {props.episodes.map((episode, index) => <h1 key={index}>{episode.id}</h1>)} */}

    </main>
  )
}

// UTILIZANDO NA FORMA DE SSR
export async function getServerSideProps() {

  // const response = await fetch("http://localhost:3333/episodes");
  // const episodes = await response.json();

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
      description: episode.description,
      fileUrl: episode.file.url,
      duration: episode.file.duration,
      publishedAt: format(parseISO(episode.published_at), "d MMM YY", { locale: ptBR }),
    };
  })

  return {
    props: {
      episodes: episodes,
    }
  }
}

// UTILIZANDO NA FORMA DE SSG
// export async function getStaticProps() {
    
//     const response = await fetch("http://localhost:3333/episodes");
//     const episodes = await response.json();

//     return {
//       props: {
//         episodes: episodes,
//       },
//       revalidate: 60 * 60 * 8,
//     }
// }