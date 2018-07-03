import { CreateUserCommand } from './CreateUserCommand';
import { User } from '../../domain/User';

export interface ICreateUserProvider {
    createUser(createUserCommand: CreateUserCommand): Promise<User>;
}