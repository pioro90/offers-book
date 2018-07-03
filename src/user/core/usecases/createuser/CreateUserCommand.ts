import { ICommand } from '../../../../common/cqrs/ICommand';

export class CreateUserCommand implements ICommand {
    constructor(public firstName: string,
                public lastName: string,
                public email: string,
                public password: string) {
    }
}