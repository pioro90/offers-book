import { BaseAggregate } from '../../../common/ddd/BaseAggregate';
import { AggregateId } from '../../../common/ddd/AggregateId';

export class Right extends BaseAggregate {
    constructor(aggregateId: AggregateId,
                private code: string,
                private description: string) {
        super(aggregateId);
    }

}