import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  display: flex;

  & > section {
    flex-grow: 1;

    & > main {
      width: 100%;
      max-width: 880px;
      margin: 0 auto;
      padding: 3rem 0;
    }
  }
`;

export {
    Container
}