import { createContext } from "react";

interface EpisodesType {
  id: string;
  title: string;
  members: string;
  publishedAt: string;
  thumbnail: string;
  description: string;
  fileUrl: string;
  duration: number;
  durationString: string;
}

interface EpisodesContext {
  allEpisodes: EpisodesType[];
  lastReleases: EpisodesType[];
}

export const EpisodesContext = createContext({} as EpisodesContext);

export const EpisodesProvider = ({ children, ...rest }) => {

    return (
        <EpisodesContext.Provider
            value={{ 
              allEpisodes: rest.allEpisodes,
              lastReleases: rest.lastReleases
            }}
        >
            {children}
        </EpisodesContext.Provider>
    )
}