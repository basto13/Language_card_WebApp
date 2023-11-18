const baseUrl = 'http://localhost:8000';

async function authenticate (username: string, password: string): Promise<string> {
  const response = await fetch(`${baseUrl}/tests/auth`, {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: {
      "Content-Type": "application/json"
    }
  });

  const body = await response.json();

  return body.token;
}

async function getTests(): Promise<any> {
  const response = await fetch(`${baseUrl}/tests/`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      "Content-Type": "application/json"
    }
  });

  return response.json();
}


export const WordsApiService = {
  authenticate,
  getTests
}