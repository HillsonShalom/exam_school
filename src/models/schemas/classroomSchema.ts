import mongoose, { Document, Schema } from "mongoose";
import { iteacher } from "./teacherSchema";
import { istudent } from "./studentSchema";

export interface iclassroom extends Document {
    teacher : iteacher;
    students: istudent[];
    name    : string;
}

export const classroomSchema = new Schema<iclassroom>({
    teacher: {
        type: Schema.Types.ObjectId,
        ref : 'teacher'
    },
    students: {
        type: [Schema.Types.ObjectId],
        ref : 'student'
    },
    name: {
        type: String
    }
}, { timestamps: true })