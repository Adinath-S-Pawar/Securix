import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth_route.js"
import messageRoutes from "./routes/message_route.js"
import { connectDB } from "./lib/db.js";

import cors from "cors";

import {server,app} from "./lib/socket.js"

import path from "path";

dotenv.config();

const PORT = process.env.PORT; //5001
const __dirname = path.resolve();

app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// app.use((req, res, next) => {
//   console.log("REQ:", req.method, req.url);
//   next();
// });


app.use("/api/auth",authRoutes) //mounts all routes inside that router file under the path /api/auth.

app.use("/api/messages",messageRoutes)

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

}

server.listen(PORT,()=>{
    console.log('Server running on port '+PORT);
    connectDB();
}); 