import { Document, Model, model } from 'mongoose';
import { UserSchema } from './user-schema';

export interface IUser extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}

export const userModel: Model<IUser> = model<IUser>('User', UserSchema);