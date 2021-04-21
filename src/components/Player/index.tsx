import PlayerAside from './styles';

function Player() {

    return (
        <PlayerAside>
            <PlayerAside.Header>
                <img src="icons/headphone.svg" alt="Continue"/>
                Tocando agora
            </PlayerAside.Header>

            <PlayerAside.Thumbnail>
                <p>
                    Selecione um podcast para ouvir
                </p>
            </PlayerAside.Thumbnail>

            <PlayerAside.Controlls>
                <button>
                    <img src="icons/shuffle.svg" alt="Aleatório" />
                </button>
                <button>
                    <img src="icons/play-previous.svg" alt="Anterior" />
                </button>
                <button>
                    <img src="icons/play.svg" alt="Iniciar" />
                </button>
                <button>
                    <img src="icons/play-next.svg" alt="Próximo" />
                </button>
                <button>
                    <img src="icons/repeat.svg" alt="Próximo" />
                </button>
            </PlayerAside.Controlls>
        </PlayerAside>
    );
}

export default Player;