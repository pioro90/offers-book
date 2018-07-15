import { BaseAggregate } from '../../../common/ddd/BaseAggregate';
import { AggregateId } from '../../../common/ddd/AggregateId';

export class User extends BaseAggregate {

    constructor(aggregateId: AggregateId,
                private firstName: string,
                private lastName: string,
                private email: string,
                private passwordHash: string,
                private profilesIds: string[] = []) {
        super(aggregateId);
    }

    changeFirstName(firstName: string): void {
        this.firstName = firstName;
    }

    changeLastName(lastName: string): void {
        this.lastName = lastName;
    }

    changePassword(password: string): void {
        // TODO password hashing
        this.passwordHash = password;
    }

    addProfiles(profilesIds: string[]): void {
        this.profilesIds.push(...profilesIds);
    }

    removeProfiles(profilesIds: string[]): void {
        this.profilesIds = this.profilesIds.filter((profileId: string) => {
            return profilesIds.indexOf(profileId) !== 0
        });
    }
}