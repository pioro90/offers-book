import { Schema } from 'mongoose';

export const rightSchemaDefinition: Schema = new Schema({
    _id: {
        type: String
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    code: {
        type: String,
        unique: true,
        required: true,
        trim: true
    }
}, {
    strict: true,
    collection: 'rights'
});