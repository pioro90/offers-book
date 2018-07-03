import { ICommand } from '../../../../common/cqrs/ICommand';


export class CreateSubcategoryCommand implements ICommand {
    constructor(public parentId: string,
                public name: string,
                public description: string) {
    }
}