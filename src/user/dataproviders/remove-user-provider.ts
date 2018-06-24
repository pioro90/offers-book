import { IRemoveUserProvider } from '../core/usecases/removeuser/remove-user-provider';
import { IUser } from './database/user-model';
import { Model } from 'mongoose';

export class RemoveUserProvider implements IRemoveUserProvider {

    constructor(private userModel: Model<IUser>) {
    }

    async removeUser(id: string): Promise<void> {
        const user: IUser = await this.userModel.findById(id);
        user.deletedAt = new Date();

        await user.save();
        return Promise.resolve();
    }
}