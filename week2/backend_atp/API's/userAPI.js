import exp from "express"
export const userApp = exp.Router() 

// test data (replace it with dta base)
let users=[]

// create API : enables communication(REST API: representational state transfer

//Route to handle GET req of Client (http://localhost:3000/users)
userApp.get('/users',(req,res) => 
{
    res.json({message :"all users",payload:users})
})
userApp.get('/users/:id',(req,res) =>
{
    let idToGet = Number(req.params.id)
    let user =users.find(userObj=>userObj.id===idToGet)
    if(user === undefined)
    {
        return res.json({message:"user not found"})
    }
    res.json({message:"a user",payload:user})

})
// route to handle POST req of client
userApp.post('/users',(req,res) =>
{
    // get user
    
    const newUser =req.body
    // push user into users
    users.push(newUser)
    res.json({message:"user created"})
})
//Route to handle PUt req of Client

userApp.put('/users',(req,res) => 
{
    // get modified user from client {}
    let modifiedUser = req.body;
    // get index of existing user in user array
    let index = users.findIndex(userObj => userObj.id=== modifiedUser.id)
    // if user not found
    if(index === -1)
    {
    return  res.json( {message:"user not found"})
    }
    // update user with index
    users.splice(index,1,modifiedUser)
    // send response
    res.json({message:"user created"})

})
//Route to handle DELETE req of Client
userApp.delete('/users/:id',(req,res) =>
{
    // get id of user from the url parameter
    let idOfUrl = Number(req.params.id)
    // find the index
    let index = users.findIndex(userObj=>userObj.id===idOfUrl)
    // if user not found
    if(index===-1)
         return res.json({message:"user not found "})
    // delet the user
    users.splice(index,1)
    res.json({message:"user deleted"})
})