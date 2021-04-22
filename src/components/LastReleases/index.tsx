import { useContext, useState } from 'react';
import { EpisodesContext } from '../../contexts/ContextEpisodes';

import Wrapper from './styles';

function LastReleases() {

    const { episodes } = useContext(EpisodesContext);
    const [lastEpisodes, setLastEpisodes] = useState([episodes[1], episodes[2]]);

    return (
        <Wrapper>
            <h1>Últimas lançamentos</h1>

            <Wrapper.Cards>

                {lastEpisodes.map((episode, index) => (
                    <Wrapper.CardEpisodes key={index}>

                        <img src={episode.thumbnail} alt={episode.title}/>

                        <h2>{episode.title}</h2>

                        <Wrapper.Informations>
                            <p>{episode.members}</p>
                            <span className="date">8 Jan 21</span>
                            <span className="duration">1:35:18</span>
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