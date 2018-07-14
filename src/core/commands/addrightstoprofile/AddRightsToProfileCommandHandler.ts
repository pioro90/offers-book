import { ICommandHandler } from '../../../common/cqrs/ICommandHandler';
import { AddRightsToProfileCommand } from './AddRightsToProfileCommand';
import { RightRepository } from '../../domain/right/RightRepository';
import { ProfileRepository } from '../../domain/profile/ProfileRepository';
import { Right } from '../../domain/right/Right';
import { Profile } from '../../domain/profile/Profile';

export class AddRightsToProfileCommandHandler implements ICommandHandler<AddRightsToProfileCommand, void> {

    constructor(private rightRepository: RightRepository,
                private profileRepository: ProfileRepository) {
    }


    async handle(command: AddRightsToProfileCommand): void {
        const rights: Right[] = await this.rightRepository.loadAll(command.rightsIds);
        const profile: Profile = await this.profileRepository.load(command.profileId);

        profile.addRights(rights);

        await this.profileRepository.save(profile);
    }

}