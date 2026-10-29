import Express from 'express'
import cors from 'cors'
import authRoutes from './routes/user.routes.js'
import productRoutes from './routes/products.routes.js'

const server = Express()

server.use(
    cors());
server.use(Express.json());


server.use("/users", authRoutes)
server.use('/products', productRoutes)

server.listen(3000, () => {
    console.log("Server running on 3000")
})