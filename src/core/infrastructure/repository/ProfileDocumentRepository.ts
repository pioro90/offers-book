import { Model } from 'mongoose';
import { ProfileRepository } from '../../domain/profile/ProfileRepository';
import { ProfileDocument } from './schema/profileModel';
import { Profile } from '../../domain/profile/Profile';

export class ProfileDocumentRepository implements ProfileRepository {

    constructor(private profileModel: Model<ProfileDocument>) {
    }


    load(id: string): Promise<Profile> {
        return this.profileModel.findById(id)
            .exec()
            .then((profileDocument: ProfileDocument) => profileDocument as Profile);
    }

    save(profile: Profile): Promise<void> {
        return this.profileModel.findByIdAndUpdate(profile.aggregateId.id, {...profile}, {upsert: true})
            .exec()
            .then(() => Promise.resolve());
    }
}