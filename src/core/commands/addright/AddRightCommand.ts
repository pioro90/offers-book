import { ICommand } from '../../../common/cqrs/ICommand';

export class AddRightCommand implements ICommand {
    constructor(public code: string,
                public description: string) {
    }
}