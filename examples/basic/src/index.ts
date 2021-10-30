import { GQW } from "../../../src/gqw";

const client = new GQW(process.env.GITHUB_TOKEN!);

(async () => {
  // Get a user
  console.log(await client.queryUser("heybereket"));

  // Get a user by email
  console.log(await client.queryEmail("bereket@gmail.com"));

  // Get a repo name
  console.log(await client.queryRepo("facebook/react"));

  // Directly fetch Github endpoint
  console.log(await client.fetch("users/heybereket"));
})();
