//Archivo app
import express from 'express'
import handlebars from 'express-handlebars'

import session from 'express-session'

import usuariosRouter from './src/routes/users.routers.js'
import ticketRouter from './src/routes/ticket.routers.js'
import tecnicosRouter from './src/routes/tecnicos.routers.js'
import estadoticketRouter from './src/routes/estadoticket.routers.js'
import loginRouter from './src/routes/login.router.js'



import __dirname from './src/utils.js'
import config from './src/config/config.js'

const app = express()

app.use(express.static(`${__dirname}/public`))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(`${__dirname}/public`))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/usuarios',usuariosRouter)
app.use('/api/ticket',ticketRouter)
app.use(express.urlencoded({ extended: true }))


app.use(session({
    config,
    secret: 'sotelec123',
    resave: true,
    saveUninitialized: true
}))

app.use('/api/usuarios', usuariosRouter)

app.use('/api/tecnicos', tecnicosRouter)

app.use('/', loginRouter)

app.use('/api/ticket', ticketRouter)

app.engine('handlebars', handlebars.engine())
app.set('views', `${__dirname}/views`)
app.set('view engine', 'handlebars')
app.use('/api/estadoticket', estadoticketRouter)
app.listen(8085, () => { console.log('Listen on port 8085') })