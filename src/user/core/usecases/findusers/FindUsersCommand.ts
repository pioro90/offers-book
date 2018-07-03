import { ICommand } from '../../../../common/cqrs/ICommand';

export class FindUsersCommand implements ICommand {
    constructor(public firstName: string,
                public lastName: string,
                public email: string,
                public start: number,
                public limit: number) {
    }
}