import styled from 'styled-components';
import React from 'react';

import { Home } from './components/pages/Home';
import GlobalStyle from './GlobalStyles';

const App: React.FC = () => {
  return (
    <Container>
      <GlobalStyle />
      <Home />
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default App;
