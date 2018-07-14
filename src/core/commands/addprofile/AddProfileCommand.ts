import { ICommand } from '../../../common/cqrs/ICommand';

export class AddProfileCommand implements ICommand {
    constructor(public name: string,
                public rightsIds: string[]) {
    }
}