const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const authRouter = require('./routes/auth-router')
const eventRouter = require('./routes/event-router')

const app = express()
const apiPort = 8000

app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send("Some friend language")
})

app.use('/api/auth', authRouter)
app.use('/api/event', eventRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
