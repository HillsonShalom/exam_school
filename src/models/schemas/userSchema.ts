import mongoose, { Document, Schema } from "mongoose";
import { iclassroom } from "./classroomSchema";

export interface iuser extends Document {
    username : string;
    password : string;
    email    : string;
    role     : string;
}

export const userSchema = new Schema<iuser>({
    username: {
        type: String,
        required: [true, "name is mandatory"],
        maxlength: [45, "too long"],
        validate: {
            validator: (name: string) => /^[a-zA-Z\s-']+$/.test(name),
            message  : "name can't include a special characters!"
        }
    },
    password: {
        type: String,
        required: [true, "password is mandatory"]
    },
    email: {
        type: String,
        required: [true, "email is mandatory"],
        validate: {
            validator: (email: string) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email),
            message: "wrong email!"
        }
    },
    role: {
        type: String,
        enum: ['student', 'teacher']
    }
}, { timestamps: true })