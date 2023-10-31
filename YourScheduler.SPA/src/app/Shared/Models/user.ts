export class User{
    constructor(
        public displayname: string,
        public email: string,
        public name?: string,
        public surname?: string
    ){}
}