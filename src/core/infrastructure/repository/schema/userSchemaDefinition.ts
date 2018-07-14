import { Schema } from 'mongoose';

export const userSchemaDefinition: Schema = new Schema({
    _id: {
        type: String
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 32
    }
}, {
    strict: true,
    collection: 'users'
});