const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001

app.use(express.static('dist'))

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})