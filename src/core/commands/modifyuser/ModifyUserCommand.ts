import { ICommand } from '../../../common/cqrs/ICommand';
import { ListChange } from '../../../common/ddd/ListChange';

export class ModifyUserCommand implements ICommand {
    constructor(public id: string,
                public firstName: string,
                public lastName: string,
                public password: string,
                public profilesChange: ListChange<string>) {}

}