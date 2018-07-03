import { ICreateCategoryProvider } from '../../core/usecases/createuser/ICreateUserProvider';
import { User } from '../../core/domain/User';
import { CreateUserCommand } from '../../core/usecases/createuser/CreateUserCommand';
import { Model } from 'mongoose';
import { IUser } from './model/userModel';


export class CreateUserProvider implements ICreateCategoryProvider {

    constructor(private userModel: Model<IUser>) {
    }

    async createUser(createUserCommand: CreateUserCommand): Promise<User> {
        return this.userModel.create(createUserCommand).then((user: IUser) => {
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