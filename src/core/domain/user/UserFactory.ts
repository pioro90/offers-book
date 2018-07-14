import { AggregateId } from '../../../common/ddd/AggregateId';
import { User } from './User';

export class UserFactory {

    createUser({firstName, lastName, email, password}): User {
        // TODO password hash

        const aggregateId: AggregateId = AggregateId.generate();

        return new User(aggregateId, firstName, lastName, email, password);
    }

}