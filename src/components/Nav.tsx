import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '20px', margin: 0, padding: 0 }}>
        <li>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Candidate Search</Link>
        </li>
        <li>
          <Link to="/saved" style={{ textDecoration: 'none', color: 'inherit' }}>Saved Candidates</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
