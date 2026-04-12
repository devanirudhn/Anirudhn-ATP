import { Schema, Types, model } from 'mongoose';

const cartSchema = new Schema({
    product: { type: Types.ObjectId, ref: "product" },
    count: { type: Number, default: 1 }
}, { _id: false });

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "Username required"],
        minLength: [4, "Min 4 chars"],
        maxLength: [20, "Max 20 chars"] // Increased from 6 to prevent errors
    },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number },
    cart: [cartSchema]
}, { versionKey: false, timestamps: true });

export const userModel = model("user", userSchema);