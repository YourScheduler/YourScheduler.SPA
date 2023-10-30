export class AuthorizationRequest {
    constructor(
        public email: string,
        public password: string){}
}

export class AuthorizationResponse{
    constructor(
        public id: number,
        public email: string,
        public displayName: string,
        public jwtAuth: string
    ){}
}
