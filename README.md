# Deno-GitHub-Requests
Rest-Api-Calls for Uploading and Getting File Values from GitHub files via Deno

## Usage Example

This Module is capable of Accessing public and also private repositories. If you want to access a private Repository it is nessesarcy to add an ".env"-file in the Project in which the following line is included.
```env
GitHubToken = ""
```
The Token can be generated via the following link: https://github.com/settings/tokens
```ts
import{ GitRequestConfig, getCurrentFileContent, updateFileContent} from "https://deno.land/x/git_hub_file_requests@v0.1.2/mod.ts";

const GitHub = new GitRequestConfig("tkister", "Deno-GitHub-Requests", "test.json")

let content = '[{"test":"test"}, "test2":3}]'

async function run() {
    let x = await getCurrentFileContent(GitHub)
    let y = await updateFileContent(GitHub, content)
    console.log(`Content in File: ${x}\nStatusCode of Rest-Call: ${y}`)
}
run()
```

  
## Execute the Tests

```
deno run --allow-net --allow-read https://deno.land/x/git_hub_file_requests@v0.1.2/test.ts
```
   
   
