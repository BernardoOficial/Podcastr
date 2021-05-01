import styled from "styled-components";

const Wrapper = styled.figure`

    position: relative;
    width: 100%;
    max-width: 710px;
    margin: 0 auto 2rem;

    button {
        position: absolute;
        top: 50%;
        z-index: 2;
        width: clamp(30px, 3rem, 3rem);
        height: clamp(30px, 3rem, 3rem);
        border-radius: 0.5rem;
        cursor: pointer;
        font-size: 0;

        transition: filter 0.3s;

        &:hover {
            filter: brightness(85%);
        }

        transform: translateX(-50%) translateY(-50%);
    }

    button.last {
        background-color: var(--purple-500);
    }
    button.play {
        background-color: var(--green-500);
    }

    .thumbnail {
        border-radius: 1rem;
    }
`;

export default Wrapper;