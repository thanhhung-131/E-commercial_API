const userRouter = require('./user')
const authRouter = require('./auth')
const cartRouter = require('./cart')
const orderRouter = require('./order')
const productRouter = require('./product')

function route(app) {
  app.use('/api/users', userRouter)
  app.use('/api/auth', authRouter)
  app.use('/api/cart', cartRouter)
  app.use('/api/orders', orderRouter)
  app.use('/api/products', productRouter)
}

module.exports = route
