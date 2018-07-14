import { AggregateId } from '../../../common/ddd/AggregateId';
import { BaseAggregate } from '../../../common/ddd/BaseAggregate';

export class Profile extends BaseAggregate {
    constructor(aggregateId: AggregateId,
                private name: string,
                private rightsIds: AggregateId[]) {
        super(aggregateId);
    }
}