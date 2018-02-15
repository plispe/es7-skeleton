import express from 'express'

// Get port from environment
const {PORT = 3000} = process.env

const app = express()

app.get('/', (req, res) => {
  res.send(`Hello world!`)
})

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
})
