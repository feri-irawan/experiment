const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 3000

// Gunakan EJS
app.set('view engine', 'ejs')

// Third-party middleware
app.use(expressLayouts)

// Aplication level middleware
app.use((req, res, next) => {
  console.log('Time', Date.now())
  next()
})

// Built-In Middleware
app.use(express.static('public'))

app.get('/', (req, res) => {
  const mahasiswa = [
    {
      nama: 'Sandhika',
      email: 'sandhika@gmail.com',
    },
    {
      nama: 'Erik',
      email: 'Erik@gmail.com',
    },
    {
      nama: 'Doddy',
      email: 'doddy@gmail.com',
    },
  ]

  res.render('index', {
    layout: 'layouts/main',
    nama: 'Feri Irawan',
    title: 'Home',
    mahasiswa,
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    layout: 'layouts/main',
    title: 'About',
  })
})

app.get('/contact', (req, res) => {
  res.render('contact', {
    layout: 'layouts/main',
    title: 'Contact',
  })
})

app.get('/product/:id', (req, res) => {
  res.send(
    `Produc ID : ${req.params.id} <br> Category ID : ${req.query.category}`
  )
})

app.use((req, res) => {
  res.status(404)
  res.send('<h1>404</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
