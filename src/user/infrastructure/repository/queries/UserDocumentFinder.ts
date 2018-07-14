import { UserFinder } from '../../../readmodel/UserFinder';
import { UserDocument } from '../schema/userModel';
import { Model } from 'mongoose';
import { UserView } from '../../../readmodel/UserView';
import { UserQuery } from '../../../readmodel/UserQuery';

export class UserDocumentFinder implements UserFinder {

    constructor(private userModel: Model<UserDocument>) {
    }

    find(query: UserQuery): Promise<UserView> {
        return this.userModel.findById(query.id)
            .exec()
            .then((userDocument: UserDocument) => {
                return {
                    firstName: userDocument.firstName,
                    lastName: userDocument.lastName,
                    email: userDocument.email
                }
            });
    }

}