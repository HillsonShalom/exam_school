import mongoose, { Document, Schema } from "mongoose";
import { iclassroom } from "./classroomSchema";

export interface iuser extends Document {
    username : string;
    password : string;
    email    : string;
    role     : string;
    classroom: iclassroom;
}