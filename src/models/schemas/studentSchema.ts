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
        type: userSchema,
        required: [true, "I need to know your details..."]
    },
    scores: {
        type   : [scoreSchema],
        default: []
    },
    classroom: {
        type    : Schema.Types.ObjectId,
        required: [true, "You don't really think to walk around our corridors..."],
        ref     : 'Classroom'
    }
}, { timestamps: true });

export const Student = mongoose.model('Student', studentSchema);