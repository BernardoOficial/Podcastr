import styled from 'styled-components'

const PlayerAside = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--purple-500);
`

PlayerAside.Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    
    font-size: 1rem;
    font-weight: 600;
    color: var(--white);
`

PlayerAside.Thumbnail = styled.section`
    width: 18.5rem;
    height: 21.625rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--purple-300);
    border: dashed 1px var(--white);
    border-radius: 1.5rem;

    p {
        font-size: 1rem;
        font-weight: 600;
        color: var(--white);
        max-width: 160px;
        text-align: center;
    }
`;

PlayerAside.Controlls = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
`

export default PlayerAside;