import styled from "styled-components";

const Wrapper = styled.article`

    max-width: 650px;
    width: 100%;
    margin: 0 auto;

    header {
        padding-bottom: 1.2rem;
        margin-bottom: 2rem;
        border-bottom: 1px solid var(--gray-100);

        .title {
            font-family: Lexend, sans-serif;
            font-size: 2rem;
            font-weight: 600;
            color: var(--gray-800);
            margin-bottom: 1.5rem;
        }

        .info-episode {
            font-family: Inter, sans-serif;
            font-size: 0.875rem;
            color: var(--gray-800);
            margin-right: 2rem;
            position: relative;

            &::before {
                content: "";
                position: absolute;
                top: 50%;
                left: -1rem;
                width: 5px;
                height: 5px;
                border-radius: 2px;
                background-color: var(--gray-100);
                transform: translateY(-50%);
            }

            &:nth-of-type(1)::before {
                display: none;
            }
        }
    }

    .description {
        font-family: Inter, sans-serif;
        color: var(--gray-800);

        p {
            font-size: 1rem;
            line-height: 1.625rem;
            margin-bottom: 2rem;
        }
    }
`

export default Wrapper;