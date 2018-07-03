import { IRemoveUserProvider } from '../../core/usecases/removeuser/IRemoveUserProvider';
import { IUser } from './model/userModel';
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