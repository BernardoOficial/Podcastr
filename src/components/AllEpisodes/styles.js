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

  tbody tr {
    border-bottom: 1px solid var(--gray-100);
  }

  tbody td {
    padding: 0.8rem 2rem 0.8rem 0;
  }

  tbody td {
    vertical-align: middle;

    &.title a {
      display: flex;
      align-items: center;

      font-family: Lexend, sans-serif;
      font-size: 1rem;
      font-weight: 600;
      color: var(--gray-800);

      & > img {
          width: 40px;
          height: 40px;
          margin-right: 1rem;
          object-fit: cover;
          border-radius: 0.5rem;
      }
      
    }

    &.members,
    &.date,
    &.duration {
      font-family: Inter, sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      color: var(--gray-500);

      min-width: 100px;
    }

    &.button button {
      width: 1.8rem;
      height: 1.8rem;
      border-radius: 0.525rem;
      background-color: transparent;
      border: 1px solid var(--gray-100);
      font-size: 0;
    }
  }
`;

export default Wrapper;