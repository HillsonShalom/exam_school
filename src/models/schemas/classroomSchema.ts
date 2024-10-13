import mongoose, { Document, Schema } from "mongoose";
import { iteacher } from "./teacherSchema";
import { istudent } from "./studentSchema";

export interface iclassroom extends Document {
    teacher : iteacher;
    students: istudent[];
    name    : string;
}