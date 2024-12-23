import e from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors"
import connectDB from "./database/dbConnect.js";
import userRouter from "./routes/user.route.js";
dotenv.config({});
// call data base connection 
connectDB();

const app = e();
const PORT = process.env.PORT || 8080
// default middle ware
app.use(e.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

//apies 
app.use("/api/v1/user", userRouter);
app.get("/home", (req, resp) => {
    resp.status(200).json({
        success: true,
        message: "i am comming from backend"
    })
})


app.listen(PORT, () => {
    console.log(`server is started at the port ${PORT}`);

});
