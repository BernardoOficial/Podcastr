import styled from 'styled-components'

const PlayerAside = styled.aside`
    width: 100%;
    max-width: 26.5rem;
    height: 100vh;
    background-color: var(--purple-500);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    padding: 2.25rem 2rem 3rem;

    font-family: Lexend, sans-serif;
    color: var(--white);

    .empty {
        opacity: 0.6;
    }
`

PlayerAside.Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    
    font-size: 1rem;
    font-weight: 600;

    img {
        margin-right: 1rem;
    }
`

PlayerAside.Thumbnail = styled.section`
    width: 18.5rem;
    height: 21.625rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background: linear-gradient(143.8deg, rgba(145, 100, 250, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
    border: dashed 1px var(--white);
    border-radius: 1.5rem;

    p {
        font-size: 1rem;
        font-weight: 600;
        max-width: 160px;
        text-align: center;
        opacity: 1;
    }
`;

PlayerAside.Progress = styled.section`
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    .empty-player {
        width: 10rem;
        height: 4px;
        margin: 0 1rem;    
        border-radius: 0.5rem;
        background-color: var(--purple-400);
    }
`;

PlayerAside.Controlls = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        background-color: transparent;
        margin: 0 0.5rem;
        font-size: 0;

        &.play {
            padding: 1rem;
            border-radius: 30%;
            background-color: var(--purple-400);
        }

        img {
            filter: brightness(80%);
        }
    }
`

export default PlayerAside;