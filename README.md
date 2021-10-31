# gqw
🏷️ Type-safe Github API Wrapper

## Getting Started
```bash
# Yarn
yarn install gqw

# NPM
npm install gqw
```

## Example
```ts
const client = new GQW(process.env.GITHUB_TOKEN!);

(async () => {
  // Get a user
  console.log(await client.queryUser("heybereket"));

  // Get a user by email
  console.log(await client.queryEmail("bereket@gmail.com"));

  // Get a repo name
  console.log(await client.queryRepo("facebook/react"));
  
  // Get a organization by name
  console.log(await client.queryOrg("facebook"));

  // Directly fetch Github endpoint
  console.log(await client.get("users/heybereket"));
})();
```

## Why?
The Github REST API doesn't provide deeper query fetching (for ex. finding github users by email), so I thought this may be helpful. It's based off of Octokit and is user friendly - I'm working on adding more queries as well. <br/> <br/> Feel free to open a PR and add your own too :)

## What does GQW stand for?
> Github Query Wrapper
