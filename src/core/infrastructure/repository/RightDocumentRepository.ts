import { RightRepository } from '../../domain/right/RightRepository';
import { Model } from 'mongoose';
import { Right } from '../../domain/right/Right';
import { RightDocument } from './schema/rightModel';

export class RightDocumentRepository implements RightRepository {

    constructor(private rightModel: Model<RightDocument>) {
    }


    load(id: string): Promise<Right> {
        return this.rightModel.findById(id)
            .exec()
            .then((rightDocument: RightDocument) => rightDocument as Right);
    }

    save(right: Right): Promise<void> {
        return this.rightModel.findByIdAndUpdate(right.aggregateId.id, {...right}, {upsert: true})
            .exec()
            .then(() => Promise.resolve());
    }
}