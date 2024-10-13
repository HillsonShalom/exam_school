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
        ref : 'Teacher'
    },
    students: {
        type: [Schema.Types.ObjectId],
        ref : 'Student'
    },
    name: {
        type: String,
        required: [true, "name is mandatory"],
        unique: true,
        maxlength: [45, "too long"],
        validate: {
            validator: (name: string) => /^[a-zA-Z\s-']+$/.test(name),
            message  : "name can't include a special characters!"
        }
    }
}, { timestamps: true });

export const Classroom = mongoose.model('Classroom', classroomSchema);