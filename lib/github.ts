import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export interface GitHubRepoData {
  stars: number;
  forks: number;
  language: string;
  description: string;
}

export async function getRepoData(
  repo: string
): Promise<GitHubRepoData | null> {
  try {
    const [owner, name] = repo.split("/");
    const { data } = await octokit.repos.get({
      owner,
      repo: name,
    });

    return {
      stars: data.stargazers_count,
      forks: data.forks_count,
      language: data.language || "Unknown",
      description: data.description || "",
    };
  } catch {
    // Silently fail - GitHub stats are optional
    return null;
  }
}

export async function getAllRepoData(
  repos: string[]
): Promise<Map<string, GitHubRepoData>> {
  const repoDataMap = new Map<string, GitHubRepoData>();

  const results = await Promise.allSettled(
    repos.map((repo) => getRepoData(repo))
  );

  results.forEach((result, index) => {
    if (result.status === "fulfilled" && result.value) {
      repoDataMap.set(repos[index], result.value);
    }
  });

  return repoDataMap;
}

