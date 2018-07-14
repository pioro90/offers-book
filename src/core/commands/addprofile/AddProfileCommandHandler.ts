import { ICommandHandler } from '../../../common/cqrs/ICommandHandler';
import { AddProfileCommand } from './AddProfileCommand';
import { ProfileRepository } from '../../domain/profile/ProfileRepository';
import { ProfileFactory } from '../../domain/profile/ProfileFactory';
import { Profile } from '../../domain/profile/Profile';

export class AddProfileCommandHandler implements ICommandHandler<AddProfileCommand, string> {

    constructor(private profileRepository: ProfileRepository,
                private profileFactory: ProfileFactory) {
    }

    async handle(command: AddProfileCommand): string {
        // TODO Command validation

        const profile: Profile = this.profileFactory.createProfile(command);
        await this.profileRepository.save(profile);

        return profile.aggregateId.id;
    }
}