import { Heading } from '../../ui-components/Heading';
import { Link } from '../../ui-components/Link';

export const IssuesList = () => (
  <div>
    <Heading>Issues List</Heading>
    <ul>
      <li>
        <Link to="/issue/1">Issue 1</Link>
      </li>
    </ul>
  </div>
);
