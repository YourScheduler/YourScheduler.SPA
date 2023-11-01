export class TeamRoleFlags{
    constructor(
        public teamRoleFlagsId: number,
        public CanRemoveTeamMember: boolean,
        public CanAddTeamMember: boolean,
        public CanAddTeamRole : boolean,
        public CanEditTeamRole: boolean,
        public CanRemoveTeamRole: boolean,
        public CanEditRoleFlags: boolean,
        public CanEditTeamPhoto: boolean,
        public CanEditDescription: boolean,
        public CanEditTeamMessage: boolean,
        public CanEditTeamName: boolean,
        public CanAddTeamEvent: boolean,
        public CanEditTeamEvent: boolean,
        public CanRemoveTeamEvent: boolean,
        public CanSendEmailToTeam: boolean,
        public CanViewContent : boolean,
    ){}
}