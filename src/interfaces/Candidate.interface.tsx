// TODO: Create an interface for the Candidate objects returned by the API
export interface Candidate {
    login: string; // GitHub username
    name: string | null; // Full name (can be null)
    location: string | null; // Location (can be null)
    avatar_url: string; // URL to the user's avatar
    email: string | null; // Email (can be null)
    html_url: string; // Link to the user's GitHub profile
    company: string | null; // Company (can be null)
  }
  