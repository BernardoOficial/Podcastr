import { createContext } from "react";

interface EpisodesFileType {
  url: string;
  type: string;
  duration: number;
}

interface EpisodesType {
  id: string;
  title: string;
  members: string;
  published_at: string;
  thumbnail: string;
  description: string;
  file: EpisodesFileType;
}

interface EpisodesContext {
  episodes: EpisodesType[];
}

export const EpisodesContext = createContext({} as EpisodesContext);

export const EpisodesProvider = ({ children, ...rest }) => {

    return (
        <EpisodesContext.Provider
            value={{ episodes: rest.episodes }}
        >
            {children}
        </EpisodesContext.Provider>
    )
}