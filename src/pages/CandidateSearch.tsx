import { useState } from 'react';

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState({
    name: "Test Candidate",
    login: "test_user",
    location: "Test City",
    email: "test@example.com",
    company: "Test Company",
    avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
    html_url: "https://github.com/test_user"
  });

  return (
    <div>
      <h1>Candidate Search</h1>
      <img src={candidate.avatar_url} alt={`${candidate.login}'s avatar`} width="150" />
      <p><strong>Name:</strong> {candidate.name}</p>
      <p><strong>Username:</strong> {candidate.login}</p>
      <p><strong>Location:</strong> {candidate.location}</p>
      <p><strong>Email:</strong> {candidate.email}</p>
      <p><strong>Company:</strong> {candidate.company}</p>
      <p><strong>GitHub Profile:</strong> <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">Visit Profile</a></p>
    </div>
  );
};

export default CandidateSearch;
