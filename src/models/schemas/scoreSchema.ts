import mongoose, { Document, Schema } from "mongoose";

export interface iscore extends Document {
    exam_name: string;
    score    : number;
}

export const scoreSchema = new Schema<iscore>({
    exam_name: {
        type: String
    },
    score: {
        type: Number
    }
}, { timestamps: true })