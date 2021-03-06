# Deno-GitHub-Requests
Rest-Api-Calls for Uploading and Getting File Values from GitHub files via Deno

## Usage Example

This Module is capable of Accessing public and also private repositories. GitHub requires to identify each Request, for this reason you need to add your personal Token in the Enviorment-File like the following example shows:
```env
GitHubToken = ""
```
The Token can be generated via the following link: https://github.com/settings/tokens
And needs to have the following Permissions:<br>
![Image of the required Permission](https://github.com/tkister/Deno-GitHub-Requests/blob/main/ReadMe.jpg?raw=true)
## Implementation in TypeScript-Project
```ts
import{ GitRequestConfig, getCurrentFileContent, updateFileContent} from "https://deno.land/x/git_hub_file_requests/mod.ts";

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
deno run --allow-net --allow-read --allow-env https://deno.land/x/git_hub_file_requests/test.ts
```
   
   
