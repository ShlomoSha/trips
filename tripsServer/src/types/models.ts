import { constSchema } from "../models/constModel"
import { daySchema } from "../models/dayModel"
import { sttingSchema } from "../models/settingModel"

export type Stting = ReturnType<() => typeof sttingSchema>
export type Const = ReturnType<() => typeof constSchema>
export type Day = ReturnType<() => typeof daySchema>
