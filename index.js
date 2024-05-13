import "dotenv/config";
import express from "express";

// require ("dotenv").config()

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login', (req, res) => {
  res.send('rahu_l_hr')
})
app.get('/SSS', (req, res) => {
  res.send('Hello inn')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})