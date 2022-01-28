import{ GitRequestConfig, getCurrentFileContent, updateFileContent} from "https://deno.land/x/git_hub_file_requests@v0.1.0/mod.ts";

const GitHub = new GitRequestConfig("tkister", "Deno-GitHub-Requests", "test.json")

let content: string = '[{"test":"test"}, {"test2":3}]'


async function run() {
    let x = await getCurrentFileContent(GitHub)
    let y = await updateFileContent(GitHub, content)
    console.log(`Content in File: ${x}\nStatusCode of Rest-Call: ${y}`)
}
run()