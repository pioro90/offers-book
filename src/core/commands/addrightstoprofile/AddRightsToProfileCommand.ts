import { ICommand } from '../../../common/cqrs/ICommand';

export class AddRightsToProfileCommand implements ICommand {
    constructor(public profileId: string,
                public rightsIds: string[]) {
    }
}