import mongoose, { Document, Schema } from "mongoose";

export interface iscore extends Document {
    exam_name: string;
    score    : number;
}

export const scoreSchema = new Schema<iscore>({
    exam_name: {
        type: String,
        required: [true, "name is mandatory"],
        maxlength: [45, "too long"],
        // unique: true,
        validate: {
            validator: (name: string) => /^[a-zA-Z\s-']+$/.test(name),
            message  : "name can't include a special characters!"
        }
    },
    score: {
        type: Number,
        max : [100, "A score cannot be over a hundred"],
        min : [0  , "He can't be that bad..."]
    }
}, { timestamps: true })