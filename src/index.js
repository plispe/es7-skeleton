import express from 'express'

// Get port from environment
const {PORT: port = 4000} = process.env
const app = express()

app.get('/', async (req, res) => {
  res.send(`Hello world!`);
})

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`)
})
