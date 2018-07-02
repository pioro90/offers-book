import { ICreateUserProvider } from '../../core/usecases/createuser/create-user-provider';
import { User } from '../../core/domain/user';
import { CreateUserDto } from '../../core/usecases/createuser/create-user-dto';
import { Model } from 'mongoose';
import { IUser } from './model/user-model';


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