import { Document, Model, model } from 'mongoose';
import { userSchemaDefinition } from './userSchemaDefinition';

export interface UserDocument extends Document {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export const userModel: Model<UserDocument> = model<UserDocument>('User', userSchemaDefinition);