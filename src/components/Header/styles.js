import styled from "styled-components";

const Wrapper = styled.header`
    width: 100%;
    padding: 2rem 4rem;
    background-color: var(--white);

    display: grid;
    grid-template-columns: auto auto 2fr;
    align-items: center;
    column-gap: 4rem;
    box-shadow: 0 1px 5px 1px var(--gray-100);
`

Wrapper.Slogan = styled.h4`
    font-size: 0.875rem;
    color: var(--gray-500);
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: -2rem;
        width: 1px;
        height: 100%;
        background-color: var(--gray-100);
    }
`

Wrapper.Data = styled.h4`
    justify-self: end;
    font-size: 0.875rem;
    color: var(--gray-500);
    text-transform: capitalize;
`

export default Wrapper;