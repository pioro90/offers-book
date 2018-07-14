import { User } from './User';
import { Repository } from '../../../common/ddd/Repository';

export interface UserRepository extends Repository<User> {
}