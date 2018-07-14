import { ICommand } from '../../../common/cqrs/ICommand';

export class GetUserCommand implements ICommand {
    constructor(public id: string) {
    }
}