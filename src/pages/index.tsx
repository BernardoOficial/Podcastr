// Existem 3 formas de consumir dados de uma API

import { useEffect, useState } from "react"

// Forma em SPA (Simple Page Application)
// Forma em SSR (Server Side Rendering)
// Forma em SSG (Static Site Generation)

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

export default function Home() {

  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {

    console.log('Oi do useEffect');

    fetch("http://localhost:3333/episodes")
      .then(response => response.json())
      .then(newEpisodes => setEpisodes(newEpisodes))
      .catch(error => console.log(error))
    
  }, [])

  return (
    <div>

      <h1>Home</h1>

      {console.log('Oi do jsx')}
      {episodes.map((episode, index) => <h1 key={index}>{episode.id}</h1>)}

    </div>
  )
}
