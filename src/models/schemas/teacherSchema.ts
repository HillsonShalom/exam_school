import mongoose, { Document, Schema } from "mongoose";
import { iclassroom } from "./classroomSchema";
import { iuser, userSchema } from "./userSchema";

export interface iteacher extends Document {
    details  : iuser;
    classroom: iclassroom;
}

export const teacherSchema = new Schema<iteacher>({
    details: {
        type: userSchema
    },
    classroom: {
        type: Schema.Types.ObjectId,
        ref : 'classroom'
    }
}, { timestamps: true })