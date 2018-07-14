import { ICommandHandler } from '../../../common/cqrs/ICommandHandler';
import { GetProfileCommand } from './GetProfileCommand';
import { ProfileView } from '../../readmodel/ProfileView';
import { ProfileFinder } from '../../readmodel/ProfileFinder';
import { ProfileQuery } from '../../readmodel/ProfileQuery';

export class GetProfileCommandHandler implements ICommandHandler<GetProfileCommand, Promise<ProfileView>> {

    constructor(private profileFinder: ProfileFinder) {
    }

    handle(command: GetProfileCommand): Promise<ProfileView> {
        // TODO validation
        const query: ProfileQuery = command as ProfileQuery;
        return this.profileFinder.find(query);
    }
}