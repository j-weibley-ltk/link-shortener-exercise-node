import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { linksRouter } from './routes/links'
import { redirectRouter } from './routes/redirect'

const app = express()
const PORT = 5000

app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())

app.use('/api/links', linksRouter)
app.use('/', redirectRouter)

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`API listening on http://localhost:${PORT}`)
  })
}

export default app
