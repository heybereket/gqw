import { Octokit } from "@octokit/rest";
import { queryUser, queryEmail, queryRepo, queryOrg } from "./queries";
import fetch from "node-fetch";

export class GQW {
  private readonly octokit: Octokit;
  public readonly queryUser = (user: string) => queryUser(this.octokit, user);
  public readonly queryEmail = (email: string) => queryEmail(this.octokit, email);
  public readonly queryRepo = (repo: string) => queryRepo(this.octokit, repo);
  public readonly queryOrg = (org: string) => queryOrg(this.octokit, org);

  constructor(token?: string) {
    this.octokit = new Octokit({
      auth: token,
      userAgent: "https://github.com/heybereket/gqw",
    });
  }

  /**
   * Fetch data from GitHub API
   * @param path The path to the API endpoint
   */
  public async get<T>(endpoint: string): Promise<T> {
    return fetch(`https://api.github.com/${endpoint}`).then(
      async (res) => res.json() as Promise<T>
    );
  }
}
