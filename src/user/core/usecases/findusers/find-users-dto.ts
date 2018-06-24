export class FindUsersDto {
    constructor(public firstName: string,
                public lastName: string,
                public email: string,
                public start: number,
                public limit: number) {
    }
}