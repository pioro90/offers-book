import { IUpdateUserProvider } from '../../core/usecases/updateuser/update-user-provider';
import { UpdateUserDto } from '../../core/usecases/updateuser/update-user-dto';
import { IUser } from './model/user-model';
import { Model } from 'mongoose';

export class UpdateUserProvider implements IUpdateUserProvider {

    constructor(private userModel: Model<IUser>) {
    }

    async updateUser(updateUserDto: UpdateUserDto): Promise<void> {
        const user: IUser = await this.userModel.findById(updateUserDto.id);
        user.set({
            firstName: user.firstName
        });
        await user.save();

        return Promise.resolve();
    }
}