import { ProfileQuery } from './ProfileQuery';
import { ProfileView } from './ProfileView';

export interface ProfileFinder {
    find(query: ProfileQuery): Promise<ProfileView>;
}