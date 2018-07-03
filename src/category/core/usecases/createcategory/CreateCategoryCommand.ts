import { ICommand } from '../../../../common/cqrs/ICommand';

export class CreateCategoryCommand implements ICommand {
    constructor(public name: string,
                public description: string) {
    }
}