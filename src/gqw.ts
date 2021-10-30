import { Octokit } from "@octokit/rest";

export class GQW {
  private readonly octokit: Octokit;

  constructor(token?: string) {
    this.octokit = new Octokit({
      auth: token,
      userAgent: "https://github.com/heybereket/gqw",
    });
  }

  /**
   * Query users by email
   * @param email User Email (ex. johndoe@gmail.com)
   */
  async queryEmail(email: string) {
    const { data } = await this.octokit.search.users({
      q: `${email} in:email`,
    });

    return data.items[0];
  }

  /**
   * Query repository by name
   * @param repo Repository name (ex. facebook/react)
   */
  async queryRepo(repo: string) {
    const parsed = repo.split("/");
    const { data } = await this.octokit.repos.get({
      owner: parsed[0],
      repo: parsed[1],
    });

    return data;
  }
}
