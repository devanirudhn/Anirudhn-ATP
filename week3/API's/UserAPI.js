//create min-express app 
import exp from 'express';
import {hash,compare} from "bcryptjs";
import { userModel } from '../models/UserModel.js';
import jwt from 'jsonwebtoken';
import { verifyToken } from '../middlewares/verifyToken.js';
const {sign} = jwt;

export const userApp = exp.Router()

userApp.post('/auth',verifyToken,async (req,res)=>{
  //get user cred obj from client
  const {email,password} = req.body;
  //verify email
  const user = await userModel.findOne({email:email})
  //if email not existed
  if (user===null){
    return res.status(400).json({message:"Invalid email"})
  }
  //compare passwords
  let result = await compare(password,user.password)
  //if passwords not matched
  if(result===false){
    return res.status(400).json({message:"Invalid password"})
  }
  //if passwords are matched
     //create token (jsonwebtoken -jwt -jaat)
     const signedToken = sign({email:user.email},process.env.SECRET_KEY,{expiresIn:"7d"})
     //store token in http only cookie
     res.cookie("token",signedToken,{
      httpOnly:true,
      sameSite:"lax",
      secure:false
     })
     //send res 

    res.status(200).json({message:"login success",payload:user})
     
})

userApp.post("/users",async (req,res)=>{
  //get new user object from req
  const newUser = req.body;
  //hash the password
  const hashedPassword = await hash(newUser.password,10)
  //replace plain password with hashed password
  newUser.password=hashedPassword
  //create new user document 
  const newUserDocument = new userModel(newUser)
  //save
  const result = await newUserDocument.save()
  console.log(result)
  //send res 
  res.status(201).json({message: "User created"});
})

userApp.get('/users',verifyToken,async (req,res)=>{
  //read all users
  let userList = await userModel.find();
  //send res
  res.status(200).json({message:"users",payLoad:userList})
})

userApp.get('/user',verifyToken,async(req,res)=>{
  //read user email from req
  const emailOfUser = req.user?.email;
  //find user by id
  const userObj = await userModel.findOne({email:emailOfUser}).populate('cart.product') 
  if(!userObj){
    res.json({message:"user not found"});
  }    //use findOne method to read a document for non object id fields ,2.use findById to read document through object id
  //send res
  res.status(200).json({message:"user",payLoad:userObj})
})

//update user by id
userApp.put('/users/:id',verifyToken,async (req,res)=>{
  //get modified user from req
  const modifiedUser=req.body;
  const uid=req.params.id;
  //find user by id & update
  const updatedUser = await userModel.findByIdAndUpdate(uid,{$set:{...modifiedUser}},{new:true,runValidators:true})

  //send res
  res.status(200).json({message:"User updated Successfully",payLoad:updatedUser})
})

//delete user by id
userApp.delete('/users/:id',verifyToken,async (req,res)=>{
  //get user by id 
  const deleteUser=req.params.id;
  //find user by id and delete
  const deletedUser = await userModel.findOneAndDelete(deleteUser)
  //send res
  if(!deletedUser){
    return res.status(400).json({message:"error occured"})
  }
  res.json({message:"User Deleted.",payLoad:deletedUser})
})


// //add product to user
// userApp.put('/cart/product-id/:pid',verifyToken,async (req,res)=>{
//   //get product id  from url param
//   const productId=req.params.pid;
//   //get current user details
//   const emailOfUser=req.user?.email;



//   //get user from db && add product to cart
//   const user = await userModel.findOneAndUpdate({email:emailOfUser},{$push:{cart:{product:productId}}})
//   if(!user){
//     return res.status(404).json({message:"User not found"})
//   }
   
//   //send res
//   res.status(200).json({message:"User updated Successfully",payLoad:user})
// })


//add product to user
userApp.put('/cart/product-id/:pid',verifyToken,async (req,res)=>{
  //get product id  from url param
  const productId=req.params.pid;
  //get current user details
  const emailOfUser=req.user?.email;
 
   const findProduct = user.cart.find(product=>product.product.toString()===productId)
  if(findProduct){
    product.count+=1;
  }
  else{
    user.cart.push({
      product:productId,
      count:1
    })
  }
   
  //get user from db && add product to cart
  const user = await userModel.findOneAndUpdate({email:emailOfUser},{$push:{cart:{product:productId}}})
  if(!user){
    return res.status(404).json({message:"User not found"})
  }

  //send res
  res.status(200).json({message:"User updated Successfully",payLoad:user})
})