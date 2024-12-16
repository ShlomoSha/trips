import { NextFunction, Request, Response } from "express";

export const updateSettings = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
    } catch (err) {
        console.error("Can't update settings", err)
        next(err)
    }
}

export const getSettings = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
    } catch (err) {
        console.error(err)
        next(err)
    }
}