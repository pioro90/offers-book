import { Document, Model, model } from 'mongoose';
import { userSchema } from './userSchema';

export interface UserDocument extends Document {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export const userModel: Model<UserDocument> = model<UserDocument>('User', userSchema);