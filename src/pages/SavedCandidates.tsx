import { useState, useEffect } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  // Retrieve saved candidates from local storage on component mount
  useEffect(() => {
    const storedCandidates = localStorage.getItem('savedCandidates');
    if (storedCandidates) {
      setSavedCandidates(JSON.parse(storedCandidates));
    }
  }, []);

  // Remove a candidate from the saved list
  const handleRemove = (username: string) => {
    const updatedCandidates = savedCandidates.filter(
      (candidate) => candidate.login !== username
    );
    setSavedCandidates(updatedCandidates);
    localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates));
  };

  if (savedCandidates.length === 0) {
    return <p>No saved candidates available.</p>;
  }

  return (
    <div>
      <h1>Potential Candidates</h1>
      {savedCandidates.map((candidate) => (
        <div key={candidate.login} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
          <img src={candidate.avatar_url} alt={`${candidate.login}'s avatar`} width="100" />
          <p><strong>Name:</strong> {candidate.name || 'Name not available'}</p>
          <p><strong>Username:</strong> {candidate.login}</p>
          <p><strong>Location:</strong> {candidate.location || 'Location not available'}</p>
          <p><strong>Email:</strong> {candidate.email || 'Email not available'}</p>
          <p><strong>Company:</strong> {candidate.company || 'No company listed'}</p>
          <p><strong>GitHub Profile:</strong> <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">Visit Profile</a></p>
          <button onClick={() => handleRemove(candidate.login)}>- Remove</button>
        </div>
      ))}
    </div>
  );
};

export default SavedCandidates;
