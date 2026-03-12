import exp from 'express';
import { userApp } from "./API's/UserAPI.js"; 
import { connect } from 'mongoose';
import { productApp } from "./API's/productAPI.js";
import cookieParser from 'cookie-parser';
import { config } from 'dotenv';

config();
const app = exp();

app.use(exp.json());
app.use(cookieParser());

// Route forwarding
app.use('/user-api', userApp);
app.use('/product-api', productApp);

// DB Connection
const port = process.env.PORT || 3000;
async function connectDB() {
    try {
        await connect(process.env.DB_URL);
        console.log("DB connection success");
        app.listen(port, () => console.log(`Server running on port ${port}`));
    } catch (err) {
        console.log("Error in DB connection: ", err);
    }
}
connectDB();

// Global Error Handler
app.use((err, req, res, next) => {
    if (err.name === "ValidationError") {
        return res.status(400).json({ message: "Validation Error", error: err.message });
    }
    if (err.name === "CastError") {
        return res.status(400).json({ message: "Invalid ID format", error: err.message });
    }
    res.status(500).json({ message: "Server Error", error: err.message });
});