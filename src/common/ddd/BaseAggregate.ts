import { AggregateId } from './AggregateId';

export class BaseAggregate {
    constructor(private _aggregateId: AggregateId) {
    }

    get aggregateId(): AggregateId {
        return this._aggregateId;
    }
}