import { RightRepository } from '../../domain/right/RightRepository';
import { Model } from 'mongoose';
import { Right } from '../../domain/right/Right';
import { RightDocument } from './schema/rightModel';
import { AggregateId } from '../../../common/ddd/AggregateId';

export class RightDocumentRepository implements RightRepository {

    constructor(private rightModel: Model<RightDocument>) {
    }


    load(id: string): Promise<Right> {
        return this.rightModel.findById(id)
            .exec()
            .then((rightDocument: RightDocument) => rightDocument as Right);
    }

    loadAll(ids: string[]): Promise<Right[]> {
        return this.rightModel.find()
            .where('_id')
            .in(ids)
            .exec()
            .then((rightsDocuments: RightDocument[]) => {
                return rightsDocuments.map((rightDocument: RightDocument) => {
                    const aggregateId: AggregateId = new AggregateId(rightDocument.id);

                    return new Right(aggregateId, rightDocument.code, rightDocument.description);
                })
            });
    }


    save(right: Right): Promise<void> {
        return this.rightModel.findByIdAndUpdate(right.aggregateId.id, {...right}, {upsert: true})
            .exec()
            .then(() => Promise.resolve());
    }
}