import { Octokit } from "@octokit/rest";
import { queryUser, queryEmail, queryRepo } from "./queries";
import fetch from 'node-fetch';

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

  /**
	 * Fetch data from GitHub API
	 * @param path The path to the API endpoint
	 */
	public async fetch<T>(endpoint: string): Promise<T> {
		return fetch(`https://api.github.com/${endpoint}`, {
			
		}).then(async (res: Response) => res.json() as Promise<T>);
	}
}
