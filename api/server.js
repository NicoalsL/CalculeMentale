const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.send('ok cest ok'))
app.get('*', (req, res) => res.statusCode(501).send('ok mais pas ok'))

app.listen(8989, () => {
    console.log('cest parti ok')
})