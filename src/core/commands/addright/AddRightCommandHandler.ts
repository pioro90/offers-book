import { ICommandHandler } from '../../../common/cqrs/ICommandHandler';
import { AddRightCommand } from './AddRightCommand';
import { RightRepository } from '../../domain/right/RightRepository';
import { RightFactory } from '../../domain/right/RightFactory';
import { Right } from '../../domain/right/Right';

export class AddRightCommandHandler implements ICommandHandler<AddRightCommand, string> {

    constructor(private rightRepository: RightRepository,
                private rightFactory: RightFactory) {
    }

    async handle(command: AddRightCommand): string {
        // TODO Command validation

        const right: Right = this.rightFactory.createRight(command);
        await this.rightRepository.save(right);

        return right.aggregateId.id;
    }

}