export class Team{
    constructor(
        public teamId: number,
        public name: string,
        public creator: string,
        public isPrivate: boolean,
        public description?: string,
        public message?: string,
        public picturePath?: string
    ){}
}