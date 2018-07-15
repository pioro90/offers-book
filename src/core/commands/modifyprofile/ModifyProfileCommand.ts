import { ICommand } from '../../../common/cqrs/ICommand';
import { ProfileRight } from './ProfileRight';

export class ModifyProfileCommand implements ICommand {
    constructor(public id: string,
                public name: string,
                public rights: ProfileRight) {
    }
}