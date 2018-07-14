import { AggregateId } from '../../../common/ddd/AggregateId';
import { Profile } from './Profile';

export class ProfileFactory {

    createProfile({name, rightsIds}): Profile {
        const aggregateId: AggregateId = AggregateId.generate();

        return new Profile(aggregateId, name, rightsIds);
    }
}