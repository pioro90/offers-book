import { ICommand } from '../../../../common/cqrs/ICommand';

export class UpdateUserCommand implements ICommand {
    constructor(public id: string,
                public firstName: string,
                public lastName: string,
                public email: string,
                public password: string) {
    }
}