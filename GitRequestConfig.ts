export class GitRequestConfig {
    constructor(
        private owner: string,
        private repo: string,
        private path: string
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
};