import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth_route.js"
import messageRoutes from "./routes/message_route.js"
import { connectDB } from "./lib/db.js";

import cors from "cors";

const app = express();

dotenv.config();
const PORT = process.env.PORT; //5001

app.use(express.json())
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));


app.use("/api/auth",authRoutes) //mounts all routes inside that router file under the path /api/auth.

app.use("/api/message",messageRoutes)

app.listen(PORT,()=>{
    console.log('Server running on port '+PORT);
    
    connectDB();
    
}); 