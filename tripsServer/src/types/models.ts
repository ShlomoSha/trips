import { constSchema } from "../models/constModel"
import { daySchema } from "../models/dayModel"
import { settingSchema } from "../models/settingModel"

export type Setting = ReturnType<() => typeof settingSchema>
export type Const = ReturnType<() => typeof constSchema>
export type Day = ReturnType<() => typeof daySchema>
