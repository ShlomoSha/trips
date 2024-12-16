import express, { Request, Response }  from "express"
import cors from "cors"
import settingsRouter from "./routes/sttings.route"
import expenseRouter from "./routes/expense.route"

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/settings', settingsRouter)
app.use('/api/expense', expenseRouter)


// Error handeling
app.use(async (req: Request, res: Response) => {})

app.listen(3000, () => {
    console.log("[server] I'm up on port 3000")
})