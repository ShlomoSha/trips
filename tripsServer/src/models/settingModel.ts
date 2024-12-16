import { model, Schema } from "mongoose";

const sttingSchema = new Schema({
    total: {
        type: Number,
        default: 0,
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

export type Stting = ReturnType<() => typeof sttingSchema>

export const SttingModel = model('Stting', sttingSchema)