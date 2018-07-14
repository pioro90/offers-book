import { ICommand } from '../../../common/cqrs/ICommand';

export class GetProfileCommand implements ICommand {
    constructor(public id: string) {
    }
}