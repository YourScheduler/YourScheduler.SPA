import { TeamRoleFlags } from "./teamRoleFlags";

export class TeamRole{
    constructor(
        public teamRoleId: number,
        public teamId: number,
        public name: string,
        public teamRoleFlagsId: number,
        public teamRoleFlags: TeamRoleFlags
    ){}
}