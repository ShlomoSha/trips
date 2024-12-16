import { SettingsModel } from "../models/settingModel"
import { Setting } from "../types/models"

export const getSettings = async () =>{
    try {
        return await SettingsModel.find({}).lean()
    } catch (err) {
        console.error(err)
        throw err
    }
}

export const patchSetting = async (newSettings: Setting) =>{
    try {
        return await SettingsModel.findOneAndUpdate({}, { $set: newSettings}).lean()
    } catch (err) {
        console.error(err)
        throw err
    }
}

export const createSid = async () =>{
    try {
        const firstDoc = new SettingsModel({})
        await firstDoc.save()
    } catch (err) {
        console.error(err)
        throw err
    }
}