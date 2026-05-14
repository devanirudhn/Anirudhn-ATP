import exp from "express";
import { UserModel } from "../models/UserModel.js";
import { hash, compare } from "bcryptjs";
import { config } from "dotenv";
config();

import jwt from "jsonwebtoken";
const { sign } = jwt;

import { verifyToken } from "../middlewares/verifyToken.js";

import { upload } from "../config/multer.js";
import { uploadToCloudinary } from "../config/cloudinaryUpload.js";
import cloudinary from "../config/cloudinary.js";

export const commonApp = exp.Router();


// ======================================================
// REGISTER
// ======================================================

commonApp.post(
  "/users",
  upload.single("profileImageUrl"),
  async (req, res, next) => {

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

      // upload image to cloudinary
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

      // create user document
      const newUserDoc =
        new UserModel(newUser);

      // save
      await newUserDoc.save();

      // response
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


// ======================================================
// LOGIN
// ======================================================

commonApp.post("/login", async (req, res) => {

  try {

    // get credentials
    const { email, password } = req.body;

    console.log(req.body);

    // find user
    const user =
      await UserModel.findOne({ email });

    // invalid email
    if (!user) {

      return res.status(400).json({
        message: "Invalid email",
      });
    }

    // compare password
    const isMatched =
      await compare(password, user.password);

    // invalid password
    if (!isMatched) {

      return res.status(400).json({
        message: "Invalid password",
      });
    }

    // create token
    const signedToken = sign(
      {
        id: user._id,
        email: user.email,
        role: user.role,
        firstName: user.firstName,
        lastName: user.lastName,
        profileImageUrl:
          user.profileImageUrl,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );

    // store token in cookie
    res.cookie("token", signedToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });

    // remove password
    let userObj = user.toObject();

    delete userObj.password;

    // response
    res.status(200).json({
      message: "login success",
      payload: userObj,
    });

  } catch (err) {

    console.log("LOGIN ERROR:", err);

    res.status(500).json({
      error: err.message,
    });
  }
});


// ======================================================
// LOGOUT
// ======================================================

commonApp.get("/logout", (req, res) => {

  try {

    // clear cookie
    res.clearCookie("token", {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });

    // response
    res.status(200).json({
      message: "Logout success",
    });

  } catch (err) {

    console.log("LOGOUT ERROR:", err);

    res.status(500).json({
      error: err.message,
    });
  }
});


// ======================================================
// CHECK AUTH
// ======================================================

commonApp.get(
  "/check-auth",
  verifyToken("USER", "AUTHOR", "ADMIN"),
  (req, res) => {

    try {

      res.status(200).json({
        message: "authenticated",
        payload: req.user,
      });

    } catch (err) {

      console.log("CHECK AUTH ERROR:", err);

      res.status(500).json({
        error: err.message,
      });
    }
  }
);


// ======================================================
// CHANGE PASSWORD
// ======================================================

commonApp.put(
  "/password",
  verifyToken("USER", "AUTHOR", "ADMIN"),
  async (req, res) => {

    try {

      // get passwords
      const {
        currentPassword,
        newPassword,
      } = req.body;

      // same passwords
      if (
        currentPassword === newPassword
      ) {

        return res.status(400).json({
          message:
            "Passwords are same. Please give another password",
        });
      }

      // find user
      const user =
        await UserModel.findById(
          req.user.id
        );

      // compare current password
      let isMatched =
        await compare(
          currentPassword,
          user.password
        );

      // invalid current password
      if (!isMatched) {

        return res.status(400).json({
          message:
            "Current password is invalid",
        });
      }

      // hash new password
      const newUserPassword =
        await hash(newPassword, 12);

      // update password
      await UserModel.updateOne(
        { _id: req.user.id },
        {
          $set: {
            password: newUserPassword,
          },
        }
      );

      // response
      res.status(200).json({
        message:
          "Password changed successfully",
      });

    } catch (err) {

      console.log(
        "CHANGE PASSWORD ERROR:",
        err
      );

      res.status(500).json({
        error: err.message,
      });
    }
  }
);