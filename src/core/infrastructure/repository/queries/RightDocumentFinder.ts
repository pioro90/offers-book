import { Model } from 'mongoose';
import { RightFinder } from '../../../readmodel/RightFinder';
import { RightDocument } from '../schema/rightModel';
import { RightQuery } from '../../../readmodel/RightQuery';
import { RightView } from '../../../readmodel/RightView';

export class RightDocumentFinder implements RightFinder {

    constructor(private rightModel: Model<RightDocument>) {
    }

    find(query: RightQuery): Promise<RightView> {
        return this.rightModel.findById(query.id)
            .exec()
            .then((rightDocument: RightDocument) => {
                return {
                    code: rightDocument.code,
                    description: rightDocument.description
                }
            });
    }

}