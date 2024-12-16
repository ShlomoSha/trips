import express  from "express"
import cors from "cors"
import sttingsRouter from "./routes/sttings.route"
import expenseRouter from "./routes/expense.route"

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/settings', sttingsRouter)
app.use('/api/expense', expenseRouter)

app.listen(3000, () => {
    console.log("[server] I'm up on port 3000")
})