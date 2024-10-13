import mongoose, { Document, Schema } from "mongoose";
import { iscore } from "./scoreSchema";
import { iclassroom } from "./classroomSchema";
import { iuser } from "./userSchema";

export interface istudent extends Document {
    details  : iuser
    scores   : iscore[];
    classroom: iclassroom;
}