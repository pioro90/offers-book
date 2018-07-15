import { Model } from 'mongoose';

import { User } from '../../domain/user/User';
import { UserDocument } from './schema/userModel';
import { AggregateId } from '../../../common/ddd/AggregateId';

export class UserDocumentRepository implements UserDocumentRepository {

    constructor(private userModel: Model<UserDocument>) {
    }


    load(id: string): Promise<User> {
        return this.userModel.findById(id)
            .exec()
            .then((userDocument: UserDocument) => {
                const aggregateId: AggregateId = new AggregateId(userDocument.id);

                return new User(aggregateId,
                    userDocument.firstName,
                    userDocument.lastName,
                    userDocument.email,
                    userDocument.password,
                    userDocument.profilesIds);
            });
    }

    save(user: User): Promise<void> {
        return this.userModel.findByIdAndUpdate(user.aggregateId.id, {...user}, {upsert: true})
            .exec()
            .then(() => Promise.resolve());
    }

}