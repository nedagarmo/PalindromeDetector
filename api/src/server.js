import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import palindrome from './controllers/palindrome.controller'

const app = express()
app.use(bodyParser.json())
app.use(cors())

const port = 3000

app.route('/iecho').get(palindrome)

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))
export default { app }
