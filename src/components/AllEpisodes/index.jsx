import { useContext } from 'react';
import { EpisodesContext } from '../../contexts/ContextEpisodes';

import Wrapper from './styles';

function AllEpisodes() {

    const { episodes } = useContext(EpisodesContext);

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
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="title">
                            <img src="https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/funcional.jpg" alt=""/>
                            <p>A vida é boa</p>
                        </td>
                        <td className="members">Tiago, Diego e Pellizzetti</td>
                        <td className="date">8 Jan 21</td>
                        <td className="duration">1:35:18</td>
                    </tr>
                    <tr>
                        <td className="title">
                            <img src="https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/funcional.jpg" alt=""/>
                            <p>A vida é boa</p>
                        </td>
                        <td className="members">Tiago, Diego e Pellizzetti</td>
                        <td className="date">8 Jan 21</td>
                        <td className="duration">1:35:18</td>
                    </tr>
                    <tr>
                        <td className="title">
                            <img src="https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/funcional.jpg" alt=""/>
                            <p>A vida é boa</p>
                        </td>
                        <td className="members">Tiago, Diego e Pellizzetti</td>
                        <td className="date">8 Jan 21</td>
                        <td className="duration">1:35:18</td>
                    </tr>
                    <tr>
                        <td className="title">
                            <img src="https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/funcional.jpg" alt=""/>
                            <p>A vida é boa</p>
                        </td>
                        <td className="members">Tiago, Diego e Pellizzetti</td>
                        <td className="date">8 Jan 21</td>
                        <td className="duration">1:35:18</td>
                    </tr>
                    <tr>
                        <td className="title">
                            <img src="https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/funcional.jpg" alt=""/>
                            <p>A vida é boa</p>
                        </td>
                        <td className="members">Tiago, Diego e Pellizzetti</td>
                        <td className="date">8 Jan 21</td>
                        <td className="duration">1:35:18</td>
                    </tr>
                </tbody>

            </Wrapper.Table>
                {/* {lastEpisodes.map((episode, index) => (
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
                ))} */}

        </Wrapper>
    );
}

export default AllEpisodes;