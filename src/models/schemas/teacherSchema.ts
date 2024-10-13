import mongoose, { Document, Schema } from "mongoose";
import { iclassroom } from "./classroomSchema";
import { iuser } from "./userSchema";

export interface iteacher extends Document {
    details  : iuser;
    classroom: iclassroom;
}