import { Octokit } from "@octokit/rest";

/**
 * Query user by username
 * @param user Username of account (ex. heybereket)
 */
export const queryUser = async (octokit: Octokit, user: string) => {
  const { data } = await octokit.search.users({
    q: `${user} in:username`,
  });

  return data.items[0];
};
