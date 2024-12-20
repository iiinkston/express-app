const express = require('express')
const app = express()

app.use(express.static('./public'))
app.all('*', (req, res) => {
    res.status(404).send('<h1>Page Not Found</h1>')

})
app.listen(5001, () => {
    console.log('server listening on port 5001....')
})

