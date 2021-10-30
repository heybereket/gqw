import { Octokit } from "@octokit/rest";

/**
 * Query repository by name
 * @param repo Repository name (ex. heybereket/gqw)
 */
export const queryRepo = async (octokit: Octokit, repo: string) => {
  const parsed = repo.split("/");
  const { data } = await octokit.repos.get({
    owner: parsed[0],
    repo: parsed[1],
  });

  return data;
};
