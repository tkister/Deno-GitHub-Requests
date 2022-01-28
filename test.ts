import{ GitRequestConfig, getCurrentFileContent, updateFileContent} from "./mod.ts";

const GitHub = new GitRequestConfig("tkister", "Deno-GitHub-Requests", "test.json")

let content: string = '[{"test":"test"}, {"test2":3}]'


async function run() {
    let x = await getCurrentFileContent(GitHub)
    let y = await updateFileContent(GitHub, content)
    console.log(`Content in File: ${x}\nStatusCode of Rest-Call: ${y}`)
}
run()