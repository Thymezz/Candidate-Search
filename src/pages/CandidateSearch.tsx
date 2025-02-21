import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetchCandidate();
  }, []);

  const fetchCandidate = async () => {
    setLoading(true);
    setError('');
    try {
      const users = await searchGithub();
      if (users && users.length > 0) {
        const userDetails = await searchGithubUser(users[0].login);
        setCandidate(userDetails);
      } else {
        setError('No candidates found from the API.');
      }
    } catch (err) {
      console.error('API Fetch Error:', err);
      setError('Error fetching candidate data from GitHub.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading candidate...</p>;
  if (error) return <p>{error}</p>;
  if (!candidate) return <p>No candidates available.</p>;

  return (
    <div>
      <h1>Candidate Search</h1>
      <img src={candidate.avatar_url} alt={`${candidate.login}'s avatar`} width="150" />
      {candidate.name && <p><strong>Name:</strong> {candidate.name}</p>}
      <p><strong>Username:</strong> {candidate.login}</p>
      {candidate.location && <p><strong>Location:</strong> {candidate.location}</p>}
      {candidate.email && <p><strong>Email:</strong> {candidate.email}</p>}
      {candidate.company && <p><strong>Company:</strong> {candidate.company}</p>}
      <p><strong>GitHub Profile:</strong> <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">Visit Profile</a></p>
      <button onClick={fetchCandidate}>Fetch Another Candidate</button>
    </div>
  );

};

export default CandidateSearch;
