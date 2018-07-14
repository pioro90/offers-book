import { ICommandHandler } from '../../../common/cqrs/ICommandHandler';
import { GetRightCommand } from './GetRightCommand';
import { RightView } from '../../readmodel/RightView';
import { RightFinder } from '../../readmodel/RightFinder';
import { RightQuery } from '../../readmodel/RightQuery';

export class GetRightCommandHandler implements ICommandHandler<GetRightCommand, Promise<RightView>> {

    constructor(private rightFinder: RightFinder) {
    }

    handle(command: GetRightCommand): Promise<RightView> {
        // TODO validation
        const query: RightQuery = command as RightQuery;
        return this.rightFinder.find(query);
    }
}