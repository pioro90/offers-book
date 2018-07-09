import { Document, Model, model } from 'mongoose';
import { userSchema } from './userSchema';

export interface IUser extends Document {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export const userModel: Model<IUser> = model<IUser>('User', userSchema);