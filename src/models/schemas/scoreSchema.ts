import mongoose, { Document, Schema } from "mongoose";

export interface iscore extends Document {
    exam_name: string;
    score    : number;
}