import { IFindUsersProvider } from '../core/usecases/findusers/find-users-provider';
import { User } from '../core/domain/user';
import { FindUsersDto } from '../core/usecases/findusers/find-users-dto';
import { Model } from 'mongoose';
import { IUser } from './database/user-model';

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