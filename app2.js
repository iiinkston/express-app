// Import required modules
const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('./public'))

// // Read static files from the filesystem
// const homePage = readFileSync('./my-app/index.html') // Loads the HTML file
// const homeStyles = readFileSync('./my-app/style.css') // Loads CSS file
// const homeImage = readFileSync('./my-app/logo.svg') // Loads image
// const homeLogic = readFileSync('./my-app/browser-app.js') // Loads JS file

// // Create an HTTP server
// const server = http.createServer((req, res) => {
//     const url = req.url;

//     // Serve HTML for Home Page
//     if (url === '/') {
//         res.writeHead(200, { 'content-type': 'text/html' })
//         res.write(homePage)
//         res.end()
//     }

//     // Serve About Page (inline HTML)
//     else if (url === '/about') {
//         res.writeHead(200, { 'content-type': 'text/html' })
//         res.write('<h1>About Page</h1>')
//         res.end()
//     }

//     // Serve CSS file
//     else if (url === '/style.css') {
//         res.writeHead(200, { 'content-type': 'text/css' })
//         res.write(homeStyles)
//         res.end()
//     }

//     // Handle 404 for all other requests
//     else {
//         res.writeHead(404, { 'content-type': 'text/html' })
//         res.write('<h1>Page Not Found</h1>')
//         res.end()
//     }
// })

// Start the server
server.listen(5002, () => {
    console.log('Server running on port 5002...')
})

// Serve static file using Express
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './my-app/index.html'))
    console.log('User hit the resource')
})

// Simple About Route
app.get('/about', (req, res) => {
    res.send('About Page')
})

// 404 Handler for Express
app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource Not Found</h1>')
})

// Start Express Server
app.listen(5002, () => {
    console.log('Express server is running on port 5002...')
})
