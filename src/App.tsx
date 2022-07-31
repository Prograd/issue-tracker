import styled from '@emotion/styled';
import { Heading } from './ui-components/Heading';
import { IssuesPage } from './features/issues/IssuesPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Container>
      <Heading>Issue Tracker</Heading>
      <Routes>
        <Route path="/" element={<IssuesPage />} />
      </Routes>
    </Container>
  );
}

const Container = styled('div')`
  margin: 0 auto;
  max-width: 1100px;
  padding: 50px;
`;

export default App;
