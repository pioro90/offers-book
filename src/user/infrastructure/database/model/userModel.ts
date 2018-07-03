import { Document, Model, model } from 'mongoose';
import { userSchema } from './userSchema';

export interface IUser extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}

export const userModel: Model<IUser> = model<IUser>('User', userSchema);