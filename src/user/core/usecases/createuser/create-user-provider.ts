import { CreateUserDto } from './create-user-dto';
import { User } from '../../domain/user';

export interface ICreateUserProvider {
    createUser(createUserDto: CreateUserDto): Promise<User>;
}