import { ICommandHandler } from '../../../common/cqrs/ICommandHandler';
import { ModifyRightCommand } from './ModifyRightCommand';
import { RightRepository } from '../../domain/right/RightRepository';
import { Right } from '../../domain/right/Right';

export class ModifyRightCommandHandler implements ICommandHandler<ModifyRightCommand, void> {

    constructor(private rightRepository: RightRepository) {
    }


    async handle(command: ModifyRightCommand): void {
        const {code, description, id} = command;

        // TODO validation

        const right: Right = await this.rightRepository.load(id);

        if (description) {
            right.changeDescription(command.description);
        }

        if (code) {
            right.changeCode(command.code);
        }

        console.log(description);
        await this.rightRepository.save(right);
    }
}