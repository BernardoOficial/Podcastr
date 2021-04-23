import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  display: flex;

  & > section {
    flex-grow: 1;

    & > main {
      width: 100%;
      height: calc(100vh - 6.75rem);
      padding: 3rem 4rem;
      overflow-y: scroll;
    }
  }
`;

export {
    Container
}