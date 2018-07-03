import { Document, Model, model } from 'mongoose';
import { categorySchema } from './categorySchema';

export interface ICategory extends Document {
    name: string;
    description: string;
    parent?: string;
    ancestors?: string[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}

export const categoryModel: Model<ICategory> = model<ICategory>('Category', categorySchema);