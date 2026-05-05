import type { GithubProfile, GithubRepo } from "@/types";

const GITHUB_API_BASE = "https://api.github.com";
const REVALIDATE_SECONDS = 60 * 60;

function getAuthHeaders(): HeadersInit {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return {};
  }

  return {
    Authorization: `Bearer ${token}`,
  };
}

export async function getGithubProfile(
  username: string,
): Promise<GithubProfile | null> {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${username}`, {
      headers: getAuthHeaders(),
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as GithubProfile;
  } catch {
    return null;
  }
}

export async function getGithubRepos(username: string): Promise<GithubRepo[]> {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${username}/repos`, {
      headers: getAuthHeaders(),
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      return [];
    }

    const repos = (await response.json()) as GithubRepo[];

    return repos.sort((a, b) => {
      if (b.stargazers_count === a.stargazers_count) {
        return b.forks - a.forks;
      }
      return b.stargazers_count - a.stargazers_count;
    });
  } catch {
    return [];
  }
}
