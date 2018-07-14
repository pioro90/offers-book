import { Schema } from 'mongoose';

export const profileSchemaDefinition: Schema = new Schema({
    _id: {
        type: String
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    rightsIds: {
        type: [String]
    }
}, {
    strict: true,
    collection: 'profiles'
});