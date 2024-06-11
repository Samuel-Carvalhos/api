import express from 'express'

const app = express()

app.post('/usuarios', (req, res) => {

    console.log(req)
    res.send('OK post')
})

app.get('/usuarios', (req, res) => {
    res.send('Ok, deu bom')
})

app.listen(3000)
