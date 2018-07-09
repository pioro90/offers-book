import { IGetUserProvider } from '../../core/usecases/getuser/IGetUserProvider';
import { User } from '../../core/domain/User';
import { Model } from 'mongoose';
import { IUser } from './model/userModel';

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
                    user.password);
            });
    }

}