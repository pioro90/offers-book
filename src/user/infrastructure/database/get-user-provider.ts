import { IGetUserProvider } from '../../core/usecases/getuser/get-user-provider';
import { User } from '../../core/domain/user';
import { Model } from 'mongoose';
import { IUser } from './model/user-model';

export class GetUserProvider implements IGetUserProvider {

    constructor(private userModel: Model<IUser>) {
    }

    getUser(id: string): Promise<User> {
        return this.userModel.findById(id)
            .exec()
            .then((user: IUser) => {
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