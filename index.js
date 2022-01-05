const { application } = require('express')
const express = require('express')
const exbhs = require('express-handlebars')
const conn = require('./db/conn')
const Task = require('./models/Task')
const tasksRoutes = require('./routes/tasksRoutes')

const app = express()
app.engine('.hbs', exbhs.engine({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.use(express.static('public'))
app.use('/tasks', tasksRoutes)

conn.sync()
    .then(() => { app.listen(3000) })
    .catch((err) => { console.log(err) })