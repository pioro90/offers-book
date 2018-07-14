import { Document, Model, model } from 'mongoose';
import { profileSchemaDefinition } from './profileSchemaDefinition';

export interface ProfileDocument extends Document {
    id: string;
    name: string;
    rightsIds: string[];
}

export const profileModel: Model<ProfileDocument> = model<ProfileDocument>('Profile', profileSchemaDefinition);