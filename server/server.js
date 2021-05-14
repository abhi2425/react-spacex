const path = require('path')
const express = require('express')
const PORT = process.env.PORT || 8080
const app = express()
app.use(express.static(path.join(__dirname, '/../build')))

app.get('*', (_, res) =>
  res.sendFile(path.resolve(__dirname + '/../build/index.html'))
)

app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`)
})
