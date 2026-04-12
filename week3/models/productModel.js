import { Schema, model } from 'mongoose';

const productSchema = new Schema({
    productId: {
        type: Number,
        required: [true, "Product id required"],
        unique: true
    },
    productName: {
        type: String,
        required: [true, "Product name is required"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [10000, "Min price 10000"],
        max: [50000, "Max price 50000"]
    },
    brand: {
        type: String,
        required: [true, "Brand is required"]
    }
}, { versionKey: false, timestamps: true });

export const productModel = model("product", productSchema);