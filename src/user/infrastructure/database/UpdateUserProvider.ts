import { IUpdateUserProvider } from '../../core/usecases/updateuser/IUpdateUserProvider';
import { UpdateUserCommand } from '../../core/usecases/updateuser/UpdateUserCommand';
import { IUser } from './model/userModel';
import { Model } from 'mongoose';

export class UpdateUserProvider implements IUpdateUserProvider {

    constructor(private userModel: Model<IUser>) {
    }

    async updateUser(updateUserCommand: UpdateUserCommand): Promise<void> {
        const user: IUser = await this.userModel.findById(updateUserCommand.id);
        user.set({
            firstName: user.firstName
        });
        await user.save();

        return Promise.resolve();
    }
}