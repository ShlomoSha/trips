import { model, Schema } from "mongoose";

export const daySchema = new Schema({
    date: {
        type: Date,
        default: Date.now,
        unique: true,
    },
    food: {
        type: Number,
        default: 0,
    },
    accommodation: {
        type: Number,
        default: 0,
    },
    activities: {
        type: Number,
        default: 0,
    },
    shopping: {
        type: Number,
        default: 0,
    },
    other: {
        type: Number,
        default: 0,
    }
})

export const DayModel = model('Day', daySchema)