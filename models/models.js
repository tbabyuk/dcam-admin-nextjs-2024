import { Schema, model, models } from "mongoose";


const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true})



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


export const User = models.User || model("User", userSchema)
export const Meta = models.Meta || model("Meta", metaSchema)