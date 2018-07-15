import { AggregateId } from '../../../common/ddd/AggregateId';
import { BaseAggregate } from '../../../common/ddd/BaseAggregate';
import { Right } from '../right/Right';

export class Profile extends BaseAggregate {
    constructor(aggregateId: AggregateId,
                private name: string,
                private rightsIds: string[]) {
        super(aggregateId);
    }

    addRights(rightsIds: string[]): void {
        this.rightsIds.push(...rightsIds);
    }

    removeRights(rightsIds: string[]): void {
        this.rightsIds = this.rightsIds.filter((rightId: string) => {
           return rightsIds.indexOf(rightId) !== 0
        });
    }

    changeName(name: string): void {
        this.name = name;
    }
}