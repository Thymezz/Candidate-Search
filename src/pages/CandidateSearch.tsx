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
      console.log('Fetching candidates from GitHub...');
      const users = await searchGithub();
      console.log('Users fetched:', users);

      if (users && users.length > 0) {
        const userDetails = await searchGithubUser(users[0].login);
        console.log('User details:', userDetails);
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
      <p><strong>Name:</strong> {candidate.name || 'Name not available'}</p>
      <p><strong>Username:</strong> {candidate.login}</p>
      <p><strong>Location:</strong> {candidate.location || 'Location not available'}</p>
      <p><strong>Email:</strong> {candidate.email || 'Email not available'}</p>
      <p><strong>Company:</strong> {candidate.company || 'No company listed'}</p>
      <p><strong>GitHub Profile:</strong> <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">Visit Profile</a></p>
      <button onClick={fetchCandidate}>Fetch Another Candidate</button>
    </div>
  );
};

export default CandidateSearch;
