const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const AuthRouter = require('./routes/AuthRouter')
const app = express()
const CategoryRouter = require('./routes/CategoryRouter')
const ProductRouter = require('./routes/ProductRouter')
<<<<<<< HEAD
const OrderDetailsRouter = require('./routes/OrderDetailsRouter')
const ReviewRouter = require('./routes/ReviewRouter')
=======
const CartRouter = require('./routes/CartRouter')

>>>>>>> 5e4270d9c551df28abc8ded5865df70df10e292e

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use('/category', CategoryRouter)
<<<<<<< HEAD
app.use('/review', ReviewRouter)
app.use('/cart', OrderDetailsRouter)
=======
app.use('/cart', CartRouter)
>>>>>>> 5e4270d9c551df28abc8ded5865df70df10e292e
app.use('/product', ProductRouter)
app.use('/auth', AuthRouter)

app.get('/', (req, res) => res.json({ message: 'Server Works' }))
app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))
