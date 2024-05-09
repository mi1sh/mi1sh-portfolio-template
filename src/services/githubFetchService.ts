export async function fetchGithubUser(username: string): Promise<any> {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) {
    throw new Error('Failed to fetch user data');
  }
  return response.json();
}