import { Schema, model, models } from "mongoose";


const metaSchema = new Schema({
    teacher: {
        type: String,
        required: true
    },
    week1Submitted: {
        type: Boolean,
        required: true
    },
    week2Submitted: {
        type: Boolean,
        required: true
    },
    payday: {
        type: String,
        required: true
    },
    notifyEmailSent: {
        type: Boolean,
        required: true
    }
},{timestamps: true})


export const Meta = models.Meta || model("Meta", metaSchema)