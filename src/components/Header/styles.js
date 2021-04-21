import styled from "styled-components";

const Wrapper = styled.header`
    width: 100%;
    max-width: 1016px;
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
`

Wrapper.Data = styled.h4`
    justify-self: end;
    font-size: 0.875rem;
    color: var(--gray-500);
`

export default Wrapper;