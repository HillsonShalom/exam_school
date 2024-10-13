import mongoose, { Document, Schema } from "mongoose";
import { iscore, scoreSchema } from "./scoreSchema";
import { iclassroom } from "./classroomSchema";
import { iuser, userSchema } from "./userSchema";

export interface istudent extends Document {
    details  : iuser
    scores   : iscore[];
    classroom: iclassroom;
}

export const studentSchema = new Schema<istudent>({
    details: {
        type: userSchema
    },
    scores: {
        type: [scoreSchema]
    },
    classroom: {
        type: Schema.Types.ObjectId,
        ref : 'classroom'
    }
}, { timestamps: true })