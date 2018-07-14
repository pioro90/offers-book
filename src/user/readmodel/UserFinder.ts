import { UserQuery } from './UserQuery';
import { UserView } from './UserView';

export interface UserFinder {
    find(query: UserQuery): Promise<UserView>;
}