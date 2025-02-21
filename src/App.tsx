import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CandidateSearch from './pages/CandidateSearch';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CandidateSearch />} />
      </Routes>
    </Router>
  );
};

export default App;
