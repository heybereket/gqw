import { GQW } from "../../../src/gqw";

const client = new GQW(process.env.GITHUB_TOKEN);

(async () => {
  console.log(await client.queryUser("heybereket"));
  console.log(await client.queryEmail("bereket@gmail.com"));
  console.log(await client.queryRepo("facebook/react"));
})();
