import styled from "styled-components";

const Wrapper = styled.section`
    margin-bottom: 3rem;

    & > h1 {
        font-family: Lexend, sans-serif;
        font-size: 1.5rem;
        color: var(--gray-800);
        margin-bottom: 1.5rem;
    }
`

Wrapper.Cards = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
`

Wrapper.CardEpisodes = styled.article`
    width: 100%;
    max-width: 27rem;
    padding: 1.25rem;
    border-radius: 1rem;

    display: grid;
    grid-template-columns: 6rem auto 40px;
    grid-template-rows: auto auto;
    column-gap: 1rem;

    box-shadow: 0 0 5px 1px var(--gray-100);
    border: 1px solid var(--gray-100);

    & > figure {
        grid-area: 1 / 1 / 3 / 2;

        img {
            width: 100%;
            height: 100%;
            min-height: 6rem;
            border-radius: 1rem;
            object-fit: cover;
            align-self: center;
        }
    }

    & > h2 {
        font-family: Lexend, sans-serif;
        color: var(--gray-800);
        font-weight: 600;
        font-size: 1rem;
        line-height: 1.4rem;
        margin-bottom: 0.5rem;

        width: 222px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    & > button {
        grid-area: 1 / 3 / 3 / 4;
        align-self: end;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 0.625rem;
        background-color: transparent;
        border: 1px solid var(--gray-100);
        font-size: 0;
    }
`

Wrapper.Informations = styled.div`
    font-size: 0.875rem;
    line-height: 1.2rem;
    color: var(--gray-500);

    p {
        margin-bottom: 0.5rem;
    }

    .date {
        margin-right: 1.5rem;
    }

    .duration {
        position: relative;
        
        &::before {
            content: "";
            position: absolute;
            top: 0.4rem;
            
            left: -0.8rem;
            border-radius: 50%;
            width: 5px;
            height: 5px;
            background-color: var(--gray-200);
            font-size: 0;
        }
    }

`

export default Wrapper;