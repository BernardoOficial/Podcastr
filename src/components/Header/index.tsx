import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import Wrapper from './styles';

function Header() {

    const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBR,
    })

    return (
        <Wrapper>
            <a href="#" title="Podcastr">
                <img src="icons/logo.svg" alt="Podcastr" title="Podcastr"/>
            </a>

            <Wrapper.Slogan>O melhor para você ouvir, sempre</Wrapper.Slogan>

            <Wrapper.Data>{currentDate}</Wrapper.Data>
        </Wrapper>
    );
}

export default Header;