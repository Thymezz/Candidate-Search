import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';


const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>(() => {
    const stored = localStorage.getItem('savedCandidates');
    return stored ? JSON.parse(stored) : [];
  });

  // Fetch a random candidate on component mount
  useEffect(() => {
    fetchCandidate();
  }, []);

  // Fetch random candidate data from GitHub
  const fetchCandidate = async () => {
    setLoading(true);
    setError('');
    try {
      const users = await searchGithub();
      if (users.length > 0) {
        const userDetails = await searchGithubUser(users[0].login);
        setCandidate(userDetails);
      } else {
        setError('No candidates found.');
      }
    } catch (err) {
      setError('Error fetching candidate data.');
    } finally {
      setLoading(false);
    }
  };

  // Save candidate and move to next
  const handleAccept = () => {
    if (candidate) {
      const updatedCandidates = [...savedCandidates, candidate];
      setSavedCandidates(updatedCandidates);
      localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates));
      fetchCandidate();
    }
  };

  // Skip current candidate
  const handleReject = () => {
    fetchCandidate();
  };

  if (loading) return <p>Loading...</p>;
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
      <button onClick={handleAccept}>+</button>
      <button onClick={handleReject}>-</button>
    </div>
  );
};

export default CandidateSearch;
