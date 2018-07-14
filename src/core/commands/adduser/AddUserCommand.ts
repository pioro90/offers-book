import { ICommand } from '../../../common/cqrs/ICommand';

export class AddUserCommand implements ICommand {
    constructor(public firstName: string,
                public lastName: string,
                public email: string,
                public password: string) {
    }
}