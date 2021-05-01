import Image from "next/image";
import Link from "next/link";
import { useContext } from 'react';
import { EpisodesContext } from '../../contexts/ContextEpisodes';

import Wrapper from './styles';

function AllEpisodes() {

    const { allEpisodes } = useContext(EpisodesContext);

    return (
        <Wrapper>
            <h1>Todos os episódios</h1>

            <Wrapper.Table>

                <thead>
                    <tr>
                        <td>Podcast</td>
                        <td>Integrantes</td>
                        <td>Data</td>
                        <td>Duração</td>
                        <td></td>
                    </tr>
                </thead>

                <tbody>
                    {allEpisodes.map(episode => (
                        <tr key={episode.id}>
                            <td className="title">
                                <Link href={`/episodes/${episode.id}`}>
                                    <a title={episode.title}>
                                        <img
                                            src={episode.thumbnail}
                                            alt={episode.title}
                                        />
                                        <p>{episode.title}</p>
                                    </a>
                                </Link>
                            </td>
                            <td className="members">{episode.members}</td>
                            <td className="date">{episode.publishedAt}</td>
                            <td className="duration">{episode.durationString}</td>
                            <td className="button">
                                <button>
                                    <img src="icons/play-green.svg" alt=""/>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </Wrapper.Table>

        </Wrapper>
    );
}

export default AllEpisodes;