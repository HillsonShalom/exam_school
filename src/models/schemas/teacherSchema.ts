import mongoose, { Document, Schema } from "mongoose";
import { iclassroom } from "./classroomSchema";
import { iuser, userSchema } from "./userSchema";

export interface iteacher extends Document {
    details  : iuser;
    classroom: mongoose.Types.ObjectId;
}

export const teacherSchema = new Schema<iteacher>({
    details: {
        type    : userSchema,
        required: [true, "I need to know your details..."]
    },
    classroom: {
        type    : Schema.Types.ObjectId,
        required: [true, "teacher can't be created without a classroom!"],
        ref     : 'Classroom'
    }
}, { timestamps: true });

export const Teacher = mongoose.model('Teacher', teacherSchema);