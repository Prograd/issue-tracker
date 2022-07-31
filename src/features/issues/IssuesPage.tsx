import { Heading } from '../../ui-components/Heading';
import { IssuesList } from './IssuesList';
import { LabelList } from './LabelList';
import styled from '@emotion/styled';

export const IssuesPage = () => (
  <Main>
    <Section>
      <Heading>Issues</Heading>
      <IssuesList />
    </Section>
    <Aside>
      <LabelList />
    </Aside>
  </Main>
);

const Main = styled('main')`
  display: flex;
  gap: 4rem;
`;

const Aside = styled('aside')`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Section = styled('section')`
  flex: 2;
`;
