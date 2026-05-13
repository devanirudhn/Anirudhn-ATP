
import exp from "express";
import { UserModel } from "../models/UserModel.js";
import { hash, compare } from "bcryptjs";
import { config } from "dotenv";
config();
import jwt from "jsonwebtoken";
import { verifyToken } from "../middlewares/verifyToken.js";
const { sign } = jwt;
export const commonApp = exp.Router();
import { upload } from "../config/multer.js";
import { uploadToCloudinary } from "../config/cloudinaryUpload.js";
import cloudinary from "../config/cloudinary.js";

//Route for register
commonApp.post(
  "/users",
  upload.single("profileImageUrl"),
  async (req, res,next) => {

    let cloudinaryResult;

    try {

      let allowedRoles = ["USER", "AUTHOR"];

      // get user
      const newUser = req.body;

      console.log("BODY:", newUser);
      console.log("FILE:", req.file);

      // validate role
      if (!allowedRoles.includes(newUser.role)) {
        return res.status(400).json({
          message: "Invalid role",
        });
      }

      // check existing user
      const existingUser =
        await UserModel.findOne({
          email: newUser.email,
        });

      if (existingUser) {
        return res.status(409).json({
          message: "User already exists",
        });
      }

      // upload image
      if (req.file) {

        cloudinaryResult =
          await uploadToCloudinary(
            req.file.buffer
          );

        newUser.profileImageUrl =
          cloudinaryResult.secure_url;

      }

      // hash password
      newUser.password =
        await hash(newUser.password, 12);

      // create user
      const newUserDoc =
        new UserModel(newUser);

      // save
      await newUserDoc.save();

      // success
      res.status(201).json({
        message: "User created successfully",
      });

    } catch (err) {

      console.log("REGISTER ERROR:", err);

      // delete uploaded image if error
      if (cloudinaryResult?.public_id) {

        await cloudinary.uploader.destroy(
          cloudinaryResult.public_id
        );
      }

      res.status(500).json({
        error: err.message,
      });
    }
  }
);