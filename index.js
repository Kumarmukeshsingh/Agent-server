
import express from "express";
import dotenv from "dotenv";
import memberRouter from "./router/memberRouters.js";
import userRouter from "./router/userRoutes.js";
import csvRoute from "./router/csvRouter.js";

import { errorHandler } from "./middleware/errorHandler.js";
import { connectDB } from "./config.js/dbConnection.js";
import cors from "cors"
import bodyParser from "body-parser";

dotenv.config();
const app = express();
const Port = process.env.PORT || 6000;


// origin: "http://localhost:5173",
const corsOption = {
   origin: "https://localhost:5173",
   methods: "POST,GET,PUT,DELETE",
   credentials: true,
}
app.use(cors(corsOption));
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();
app.use(express.json());
app.use(errorHandler);
app.use("/api/member", memberRouter);
app.use("/api/user", userRouter);
app.use("/csv", csvRoute);


app.get("/", (req, res) => {
   res.send("i am from the server");
})

app.listen(Port, () => {
   console.log(`server is running on port ${Port}`);

})