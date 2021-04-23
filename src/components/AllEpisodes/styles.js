import styled from "styled-components";

const Wrapper = styled.section`
  margin-bottom: 3rem;

  & > h1 {
    font-family: Lexend, sans-serif;
    font-size: 1.5rem;
    color: var(--gray-800);
    margin-bottom: 1.5rem;
  }
`;

Wrapper.Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;

  thead {
    font-family: Lexend, sans-serif;
    font-size: 0.75rem;
    text-transform: uppercase;
    font-weight: 500;
    color: var(--gray-200);
  }

  thead td {
    padding: 0.5rem 0;
  }

  tbody td {
    padding: 0.8rem 0;
  }

  td {
    border-bottom: 1px solid var(--gray-100);
  }

  tbody td {
    vertical-align: middle;

    &.title {
      display: flex;
      align-items: center;
      
      font-family: Lexend, sans-serif;
      font-size: 1rem;
      font-weight: 600;
      color: var(--gray-800);

      & > img {
        width: 40px;
        height: 40px;
        object-fit: cover;
        border-radius: 0.5rem;
        margin-right: 1rem;
      }
    }

    &.members, &.date, &.duration {
      font-family: Inter, sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      color: var(--gray-500);
    }
  }
`;

export default Wrapper;