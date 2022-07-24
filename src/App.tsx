import React from 'react';
import styled from '@emotion/styled';

function App() {
  return (
    <HelloContainer>
      <p>Hello react query</p>
    </HelloContainer>
  );
}

const HelloContainer = styled('main')`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
