import { BaseAggregate } from '../../../common/ddd/BaseAggregate';
import { AggregateId } from '../../../common/ddd/AggregateId';

export class User extends BaseAggregate {

    constructor(aggregateId: AggregateId,
                private firstName: string,
                private lastName: string,
                private email: string,
                private passwordHash: string,
                private profiles: AggregateId[] = []) {
        super(aggregateId);
    }
}