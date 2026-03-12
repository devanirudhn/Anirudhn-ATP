import exp from "express"
export  const productApp = exp.Router() 
let products=[]

// read all products
productApp.post('/products',(req,res) =>
{
    // get user
    const newProduct =req.body
    // push user into users
    products.push(newProduct)
    res.json({message:" product pushed"})
})
// read all the products
productApp.get('/products',(req,res) => 
{
    res.json({message :"all products",payload:products})
})

// read products by brand
productApp.get('/products/:id',(req,res) =>
{
    let prodId = Number(req.params.id)
    let product =products.find(productObjObj=>productObj.id===prodId)
    if(user === undefined)
    {
        return res.json({message:"product not found"})
    }
    res.json({message:"a product",payload:product})

})
productApp.delete('/products/:prodid',(req,res) =>
{
    // get id of user from the url parameter
    let idOfUrl = Number(req.params.id)
    // find the index
    let index = products.findIndex(productObj=>productObj.id
        ===idOfUrl)
    // if product not found
    if(index===-1)
    {
        return res.json({message:"product not found "})
    }
         
    // delet the user
    products.splice(index,1)
    res.json({message:"product deleted"})
})


// update products
productApp.put('/products',(req,res) => 
{
    // get modified user from client {}
    let modifiedProduct = req.body;
    // get index of existing user in user array
    let index = products.findIndex(productObj => productObj.id=== modifiedProduct.id)
    // if user not found
    if(index === -1)
    {
    return  res.json( {message:"product not found"})
    }
    // update user with index
    products.splice(index,1,modifiedProduct
    )
    // send response
    res.json({message:"product created"})

})