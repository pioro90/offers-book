import { Schema } from 'mongoose';
import * as bcrypt from 'bcrypt';


export const UserSchema: Schema = new Schema({
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
    },
    deletedAt: {
        type: Date
    }
}, {
    timestamps: true,
    strict: true,
    collection: 'users'
});

UserSchema.pre('save', function (next) {
    if (!this.isModified('password')) return next();

    bcrypt
        .hash(this.password, 10)
        .then(
            (hashedPassword) => {
                this.password = hashedPassword;
                next();
            },
            (err) => next(err)
        );
});