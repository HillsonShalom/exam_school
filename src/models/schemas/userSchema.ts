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
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    role: {
        type: String,
        enum: ['student', 'teacher']
    }
}, { timestamps: true })