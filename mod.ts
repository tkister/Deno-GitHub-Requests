// Imports

import { Octokit } from "https://cdn.skypack.dev/@octokit/core";
import { encode, decode } from "https://deno.land/std/encoding/base64.ts"
import { config } from "https://deno.land/x/dotenv/mod.ts";

export class GitRequestConfig {
    constructor(
        private owner: string,
        private repo: string,
        private path: string,
        token: string = config().GitHubToken
    ){};
    getOwner(): string{
        return `${this.owner}`
    };
    getRepo(): string{
        return `${this.repo}`
    };  
    getPath(): string{
        return `${this.path}`
    };    
    getparam(): string {
        return `Owner: ${this.getOwner()} \nRepo: ${this.getRepo()} \nPath: ${this.getPath()}`;
    };
}

const octokit = new Octokit({ auth: config().GitHubToken });

// Get the Sha-ID-of an element
export async function getSHA(GitRequest: GitRequestConfig) {
    let response = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
        owner: GitRequest.getOwner(),
        repo: GitRequest.getRepo(),
        path: GitRequest.getPath()
    });
    return response.data.sha
};

// Get Content of one File
async function getfile (GitRequest: GitRequestConfig) {
    let response = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
        owner: GitRequest.getOwner(),
        repo: GitRequest.getRepo(),
        path: GitRequest.getPath()
    });
    return response.data
};

// Update a FileContent on a Repository
async function updateFile(GitRequest: GitRequestConfig,CONTENT: string, MESSAGE: string = 'File Update'){
    let  SHA = await getSHA(GitRequest);
    let content = encode(CONTENT);
    let response = await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
        owner: GitRequest.getOwner(),
        repo: GitRequest.getRepo(),
        path: GitRequest.getPath(),
        sha: SHA,
        message: MESSAGE,
        content: content
    });
    return response.status;
};

export async function updateFileContent(GitRequest: GitRequestConfig, CONTENT_Input:string) {
    let data = await updateFile(GitRequest, CONTENT_Input);
    if (data = 200){
        console.log(`File updated successful`);
    }
    else{
        console.log(`Error Occuried \nError-Code: ${data} Please check the Git-Hub-Api \nhttps://docs.github.com/en/rest/reference/repos`);
    };
    return data
};

export async function getCurrentFileContent(GitRequest: GitRequestConfig) {
    let data = await getfile(GitRequest);
    let stringContent = new TextDecoder().decode(decode(data.content))
    if (data = 200){
        console.log(`Content succesfully recieved`);
    }
    else{
        console.log(`Error Occuried \nError-Code: ${data} Please check the Git-Hub-Api \nhttps://docs.github.com/en/rest/reference/repos`);
    };
    return stringContent
}

