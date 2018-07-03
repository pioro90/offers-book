import { CreateUserDto } from './CreateUserDto';
import { User } from '../../domain/User';
import { ICreateUserProvider } from './ICreateUserProvider';


export class CreateUserUseCase {

    constructor(private createUserProvider: ICreateUserProvider) {
    }

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        return this.createUserProvider.createUser(createUserDto);
    }
}