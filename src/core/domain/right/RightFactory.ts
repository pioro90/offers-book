import { AggregateId } from '../../../common/ddd/AggregateId';
import { Right } from './Right';

export class RightFactory {

    createRight({code, description}): Right {
        const aggregateId: AggregateId = AggregateId.generate();

        return new Right(aggregateId, code, description);
    }
}