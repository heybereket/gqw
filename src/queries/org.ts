import { Octokit } from "@octokit/rest";

/**
 * Query an org by name
 * @param org Organization name (ex. facebook)
 */
export const queryOrg = async (octokit: Octokit, org: string) => {
  const { data } = await octokit.orgs.get({ org });
  return data;
};
