import { IFindUsersProvider } from '../../core/usecases/findusers/IFindUsersProvider';
import { User } from '../../core/domain/User';
import { FindUsersDto } from '../../core/usecases/findusers/FindUsersDto';
import { Model } from 'mongoose';
import { IUser } from './model/userModel';

export class FindUsersProvider implements IFindUsersProvider {

    constructor(private userModel: Model<IUser>) {
    }

    findUsers(findUsersDto: FindUsersDto): Promise<User[]> {
        const query = this.userModel.find({}, '-password');

        if (findUsersDto.firstName) {
            query.regex('firstName', new RegExp(`${findUsersDto.firstName}`, 'i'));
        }

        if (findUsersDto.lastName) {
            query.regex('lastName', new RegExp(`${findUsersDto.lastName}`, 'i'));
        }

        if (findUsersDto.email) {
            query.regex('email', new RegExp(`${findUsersDto.email}`, 'i'));
        }

        if (findUsersDto.start) {
            query.skip(findUsersDto.start);
        }

        if (findUsersDto.limit) {
            query.limit(findUsersDto.limit);
        }

        return query.exec().then((users: IUser[]) => {
            return users.map((user: IUser) => {
                return new User(user.id,
                    user.firstName,
                    user.lastName,
                    user.email,
                    user.password,
                    user.createdAt,
                    user.updatedAt,
                    user.deletedAt);
            })
        });
    }
}