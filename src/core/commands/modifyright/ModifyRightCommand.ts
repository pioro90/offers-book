import { ICommand } from '../../../common/cqrs/ICommand';

export class ModifyRightCommand implements ICommand {
    constructor(public id: string,
                public code: string,
                public description: string) {
    }
}