import { Octokit } from "@octokit/rest";
import { queryUser, queryEmail, queryRepo } from "./queries";

export class GQW {
  private readonly octokit: Octokit;
  public readonly queryUser = (user: string) => queryUser(this.octokit, user);
  public readonly queryEmail = (email: string) => queryEmail(this.octokit, email);
  public readonly queryRepo = (repo: string) => queryRepo(this.octokit, repo);

  constructor(token?: string) {
    this.octokit = new Octokit({
      auth: token,
      userAgent: "https://github.com/heybereket/gqw",
    });
  }
}
