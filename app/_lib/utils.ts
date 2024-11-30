import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Octokit } from "@octokit/core";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}



const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const OWNER= "irfiacre"

export const handleGetGithubProjects = async (repoName?: string) => {
  const octokit = new Octokit({ auth: ACCESS_TOKEN });

  if (repoName) {
    const repoDetails = await octokit.request('GET /repos/{owner}/{repo}', {
        owner: OWNER,
        repo: repoName,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
      return repoDetails
  }

  const repos = await octokit.request('GET /users/{username}/repos', {
    username: OWNER,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    },
    sort:"pushed"
  })

  return repos.data || [];
};
