import { CreateUserDto } from './CreateUserDto';
import { User } from '../../domain/User';

export interface ICreateUserProvider {
    createUser(createUserDto: CreateUserDto): Promise<User>;
}