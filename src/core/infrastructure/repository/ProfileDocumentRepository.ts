import { Model } from 'mongoose';
import { ProfileRepository } from '../../domain/profile/ProfileRepository';
import { ProfileDocument } from './schema/profileModel';
import { Profile } from '../../domain/profile/Profile';
import { AggregateId } from '../../../common/ddd/AggregateId';

export class ProfileDocumentRepository implements ProfileRepository {

    constructor(private profileModel: Model<ProfileDocument>) {
    }


    load(id: string): Promise<Profile> {
        return this.profileModel.findById(id)
            .exec()
            .then((profileDocument: ProfileDocument) => {
                const aggregateId: AggregateId = new AggregateId(profileDocument.id);

                return new Profile(aggregateId, profileDocument.name, profileDocument.rightsIds);
            });
    }

    save(profile: Profile): Promise<void> {
        return this.profileModel.findByIdAndUpdate(profile.aggregateId.id, {...profile}, {upsert: true})
            .exec()
            .then(() => Promise.resolve());
    }
}