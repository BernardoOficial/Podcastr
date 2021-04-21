import Wrapper from './styles';

function Header() {

    return (
        <Wrapper>
            <a href="#" title="Podcastr">
                <img src="icons/logo.svg" alt="Podcastr" title="Podcastr"/>
            </a>

            <Wrapper.Slogan>O melhor para você ouvir, sempre</Wrapper.Slogan>

            <Wrapper.Data>Qui, 8 Abril</Wrapper.Data>
        </Wrapper>
    );
}

export default Header;