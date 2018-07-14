import * as uuid4 from 'uuid/v4'

export class AggregateId {

    constructor(private _id: string) {
    }

    get id(): string {
        return this._id;
    }

    static generate(): AggregateId {
        return new AggregateId(uuid4());
    }
}