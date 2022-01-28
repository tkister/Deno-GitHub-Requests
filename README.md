# Deno-GitHub-Requests
Rest-Api-Calls for Uploading and Getting File Values from GitHub files via Deno

## Usage Example

```ts
import{ GitRequestConfig, getCurrentFileContent, updateFileContent} from "./mod.ts";

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
deno test --allow-net https://deno.land/x/request@1.3.2/test.ts
```
   
   
