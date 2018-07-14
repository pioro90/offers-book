import { ICommand } from '../../../common/cqrs/ICommand';

export class GetRightCommand implements ICommand {
    constructor(public id: string) {
    }
}