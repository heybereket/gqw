import { Octokit } from "@octokit/rest";

/**
 * Query users by email
 * @param email User Email (ex. bereket@gmail.com)
 */
export const queryEmail = async (octokit: Octokit, email: string) => {
  if (!(typeof email === "string" && /\S+@\S+\.\S+/.test(email))) {
    throw new Error("Invalid email address");
  }

  const { data } = await octokit.search.users({
    q: `${email} in:email`,
  });

  return data.items[0];
};
