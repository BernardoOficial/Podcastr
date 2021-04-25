import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from 'react';
import { EpisodesContext } from '../../contexts/ContextEpisodes';

import Wrapper from './styles';

function LastReleases() {

    const { lastReleases } = useContext(EpisodesContext);

    return (
        <Wrapper>
            <h1>Últimas lançamentos</h1>

            <Wrapper.Cards>

                {lastReleases.map((episode, index) => (
                    <Wrapper.CardEpisodes key={index}>

                        <figure>
                            <Image
                                width="192"
                                height="192"
                                src={episode.thumbnail}
                                alt={episode.title}
                                className="thumbnail"
                            />
                        </figure>

                        <h2>
                            <Link href={`/episodes/${episode.id}`}>
                                <a title={episode.title}>
                                    {episode.title}
                                </a>
                            </Link>
                        </h2>

                        <Wrapper.Informations>
                            <p>{episode.members}</p>
                            <span className="date">{episode.publishedAt}</span>
                            <span className="duration">{episode.durationString}</span>
                        </Wrapper.Informations>

                        <button type="button">
                            <img src="icons/play-green.svg" alt="Escutar podcastr"/>
                        </button>
                    </Wrapper.CardEpisodes>
                ))}

            </Wrapper.Cards>
        </Wrapper>
    );
}

export default LastReleases;