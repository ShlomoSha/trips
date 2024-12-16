import { NextFunction, Request, Response } from "express";

export const getExpenseDate = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
    } catch (err) {
        console.error("Can't get expense data", err)
        next(err)
    }
}

export const getAggregatedDashboard = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
    } catch (err) {
        console.error("Can't get dashboard", err)
        next(err)
    }
}

export const addNewExpense = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
    } catch (err) {
        console.error("Can't add new expense", err)
        next(err)
    }
}

export const updateExistingExpense = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
    } catch (err) {
        console.error("Can't update an existing expense", err)
        next(err)
    }
}