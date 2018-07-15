import { ICommandHandler } from '../../../common/cqrs/ICommandHandler';
import { ModifyProfileCommand } from './ModifyProfileCommand';
import { RightRepository } from '../../domain/right/RightRepository';
import { ProfileRepository } from '../../domain/profile/ProfileRepository';
import { Profile } from '../../domain/profile/Profile';

export class ModifyProfileCommandHandler implements ICommandHandler<ModifyProfileCommand, void> {

    constructor(private rightRepository: RightRepository,
                private profileRepository: ProfileRepository) {
    }


    async handle(command: ModifyProfileCommand): void {
        const {id, name, rights: {addedRights, removedRights}} = command;

        const profile: Profile = await this.profileRepository.load(id);

        if (addedRights) {
            profile.addRights(addedRights);
        }

        if (removedRights) {
            profile.removeRights(removedRights);
        }

        if (name) {
            profile.changeName(name);
        }

        await this.profileRepository.save(profile);
    }

}