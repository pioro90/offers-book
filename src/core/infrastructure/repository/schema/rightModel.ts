import { Document, Model, model } from 'mongoose';
import { rightSchemaDefinition } from './rightSchemaDefinition';

export interface RightDocument extends Document {
    id: string;
    code: string;
    description: string;
}

export const rightModel: Model<RightDocument> = model<RightDocument>('Right', rightSchemaDefinition);