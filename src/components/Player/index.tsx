import PlayerAside from './styles';

function Player() {

    return (
        <PlayerAside>
            <PlayerAside.Header>
                <img src="icons/headphone.svg" alt="Continue"/>
                Tocando agora
            </PlayerAside.Header>

            <PlayerAside.Thumbnail className="empty">
                <p>
                    Selecione um podcast para ouvir
                </p>
            </PlayerAside.Thumbnail>

            <PlayerAside.Progress className="empty">

                <span>00:00</span>
                <div>
                    <div className="empty-player" />
                </div>
                <span>00:00</span>

            </PlayerAside.Progress>

            <PlayerAside.Controlls className="empty">

                <button type="button">
                    <img src="icons/shuffle.svg" alt="Aleatório" />
                </button>
                <button type="button">
                    <img src="icons/play-previous.svg" alt="Anterior" />
                </button>
                <button type="button" className="play">
                    <img src="icons/play.svg" alt="Iniciar" />
                </button>
                <button type="button">
                    <img src="icons/play-next.svg" alt="Próximo" />
                </button>
                <button type="button">
                    <img src="icons/repeat.svg" alt="Repetir" />
                </button>

            </PlayerAside.Controlls>
        </PlayerAside>
    );
}

export default Player;