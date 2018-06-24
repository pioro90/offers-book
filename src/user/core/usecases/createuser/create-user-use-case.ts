import { CreateUserDto } from './create-user-dto';
import { User } from '../../domain/user';
import { ICreateUserProvider } from './create-user-provider';


export class CreateUserUseCase {

    constructor(private createUserProvider: ICreateUserProvider) {
    }

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        return this.createUserProvider.createUser(createUserDto);
    }
}