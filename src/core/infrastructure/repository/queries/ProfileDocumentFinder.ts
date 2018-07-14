import { Model } from 'mongoose';
import { ProfileFinder } from '../../../readmodel/ProfileFinder';
import { ProfileDocument } from '../schema/profileModel';
import { ProfileQuery } from '../../../readmodel/ProfileQuery';
import { ProfileView } from '../../../readmodel/ProfileView';

export class ProfileDocumentFinder implements ProfileFinder {

    constructor(private profileModel: Model<ProfileDocument>) {
    }

    find(query: ProfileQuery): Promise<ProfileView> {
        return this.profileModel.findById(query.id)
            .exec()
            .then((profileDocument: ProfileDocument) => {
                return {
                    name: profileDocument.name,
                    rightsIds: profileDocument.rightsIds
                }
            });
    }

}