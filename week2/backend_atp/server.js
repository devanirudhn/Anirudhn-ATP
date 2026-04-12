// create HTTP server
import exp from 'express' 
import { userApp } from './API\'s/userAPI.js'
import { productApp } from './API\'s/productAPI.js'
const app = exp()

// use body parser for middleware
app.use(middleware1)
app.use(exp.json())

// forward req to userAPI if
app.use('/user-api',userApp)

app.use('/product-api',productApp)

function middleware1 (req,res,next)
{
    console.log("this is response from middleware1");
    next();
    
}


// set a port number of our choice
const port=3000
// assign port number to HTTP server
app.listen(port,() => console.log(`server listening to port ${port}...`)
)

