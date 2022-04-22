const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const AuthRouter = require('./routes/AuthRouter')
const app = express()
const CategoryRouter = require('./routes/CategoryRouter')
const ProductRouter = require('./routes/ProductRouter')
const CartRouter = require('./routes/CartRouter')


const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use('/category', CategoryRouter)
app.use('/cart', CartRouter)
app.use('/product', ProductRouter)
app.use('/auth', AuthRouter)

app.get('/', (req, res) => res.json({ message: 'Server Works' }))
app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))
