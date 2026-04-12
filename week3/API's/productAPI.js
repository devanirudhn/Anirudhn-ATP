//create min express app
import exp from 'express';
import { productModel } from '../models/productModel.js';
import { verifyToken } from '../middlewares/verifyToken.js';
export const productApp = exp.Router();
import jwt from 'jsonwebtoken'

productApp.post('/auth', verifyToken, async (req, res) => {
  try {

    // get productId from client
    const { productId } = req.body;

    // verify productId
    const product = await productModel.findOne({ productId: productId });

    // if product not found
    if (product === null) {
      return res.status(400).json({ message: "Invalid product" });
    }

    // create JWT token
    const signedToken = jwt.sign(
      { productId: product.productId },
      "abcdef",
      { expiresIn: "7d" }
    );

    // store token in cookie
    res.cookie("token", signedToken, {
      httpOnly: true,
      sameSite: "lax",
      secure: false
    });

    // send response
    res.status(200).json({
      message: "Product success",
      payload: product
    });

  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

//create product
productApp.post("/products",verifyToken,async (req,res)=>{
  //get new user object from req
  const newUser = req.body;
  //create a user in productModel
  const product = new productModel(newUser)
  //save
  const result = await product.save()
  //send res 
  res.status(200).json({message: "product created",payload:result});
})

//get all products
productApp.get('/products',verifyToken,async (req,res)=>{
  //read all users
  const productList = await productModel.find();
  //send res
  res.status(200).json({message:"all products",payLoad:productList})
})

//get product by id
productApp.get('/products/:id',verifyToken,async (req,res)=>{
  //read by id
  const pid=req.params.id
  //find by id
  const productObj = await productModel.findOne({_id:pid})
  //send res
  res.status(200).json({message:"product",payload:productObj})
})

//update the product by id
productApp.put('/products/:id',verifyToken,async (req,res)=>{
  //get modified product from req
  const modifiedProduct = req.body
  const pid=req.params.id
  //find product by id && update
  const UpdatedProduct=await productModel.findByIdAndUpdate(pid,{$set:{...modifiedProduct}},{new:true})
  //send res
  res.status(200).json({message:"product updated",payload:UpdatedProduct})
})

//delete product by id
productApp.delete('/products/:id',verifyToken,async (req,res)=>{
  //get deleting id
  const pid = req.params.id;
  //find product by id and delete
  const deletedProduct = await productModel.findByIdAndDelete(pid);
  //send response
   if(!deletedProduct){
    return res.status(400).json({message:"error occured"})
  }
  res.status(200).json({message:"product deleted.",payload:deletedProduct})
})