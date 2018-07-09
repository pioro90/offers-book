import { IFindUsersProvider } from '../../core/usecases/findusers/IFindUsersProvider';
import { User } from '../../core/domain/User';
import { FindUsersCommand } from '../../core/usecases/findusers/FindUsersCommand';
import { Model } from 'mongoose';
import { IUser } from './model/userModel';

export class FindUsersProvider implements IFindUsersProvider {

    constructor(private userModel: Model<IUser>) {
    }

    findUsers(findUsersCommand: FindUsersCommand): Promise<User[]> {
        const query = this.userModel.find({}, '-password');

        if (findUsersCommand.firstName) {
            query.regex('firstName', new RegExp(`${findUsersCommand.firstName}`, 'i'));
        }

        if (findUsersCommand.lastName) {
            query.regex('lastName', new RegExp(`${findUsersCommand.lastName}`, 'i'));
        }

        if (findUsersCommand.email) {
            query.regex('email', new RegExp(`${findUsersCommand.email}`, 'i'));
        }

        if (findUsersCommand.start) {
            query.skip(findUsersCommand.start);
        }

        if (findUsersCommand.limit) {
            query.limit(findUsersCommand.limit);
        }

        return query.exec().then((users: IUser[]) => {
            return users.map((user: IUser) => {
                return new User(user.id,
                    user.firstName,
                    user.lastName,
                    user.email,
                    user.password);
            })
        });
    }
}