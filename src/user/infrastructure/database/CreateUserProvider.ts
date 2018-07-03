import { ICreateUserProvider } from '../../core/usecases/createuser/ICreateUserProvider';
import { User } from '../../core/domain/User';
import { CreateUserDto } from '../../core/usecases/createuser/CreateUserDto';
import { Model } from 'mongoose';
import { IUser } from './model/userModel';


export class CreateUserProvider implements ICreateUserProvider {

    constructor(private userModel: Model<IUser>) {
    }

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        return this.userModel.create(createUserDto).then((user: IUser) => {
            return new User(user.id,
                user.firstName,
                user.lastName,
                user.email,
                user.password,
                user.createdAt,
                user.updatedAt,
                user.deletedAt);
        });
    }
}