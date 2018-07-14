import { Model } from 'mongoose';

import { User } from '../../domain/user/User';
import { RightDocument } from './schema/userModel';

export class UserDocumentRepository implements UserDocumentRepository {

    constructor(private userModel: Model<RightDocument>) {
    }


    load(id: string): Promise<User> {
        return this.userModel.findById(id)
            .exec()
            .then((userDocument: RightDocument) => userDocument as User);
    }

    save(user: User): Promise<void> {
        return this.userModel.findByIdAndUpdate(user.aggregateId.id, {...user}, {upsert: true})
            .exec()
            .then(() => Promise.resolve());
    }

}