import { GQW } from "../../src/gqw";

const client = new GQW(process.env.GITHUB_TOKEN);

(async () => {
  console.log(await client.queryEmail("semagnbereket@gmail.com"));
  console.log(await client.queryRepo("facebook/react"));
})();
