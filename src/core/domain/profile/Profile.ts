import { AggregateId } from '../../../common/ddd/AggregateId';
import { BaseAggregate } from '../../../common/ddd/BaseAggregate';
import { Right } from '../right/Right';

export class Profile extends BaseAggregate {
    constructor(aggregateId: AggregateId,
                private name: string,
                private rightsIds: string[]) {
        super(aggregateId);
    }

    addRights(rights: Right[]): void {
        const rightsIds: string[] = rights.map((right: Right) => {
            return right.aggregateId.id;
        });
        this.rightsIds.push(...rightsIds);
    }
}