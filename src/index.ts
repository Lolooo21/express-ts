import express, { Express, Request, Response } from "express";
import { router as authRouter } from "./routes/auth.router";
import { router as messageRouter } from "./routes/message.router";
import { router as userRouter } from "./routes/user.router";
import cors from "cors";


require("dotenv").config();

const app: Express = express();
app.use(express.json());
app.use(cors()); // sans paramètre tout le monde peut faire des reqêtes


app.use("/users", userRouter);
app.use("/messages", messageRouter);
app.use("/auth", authRouter);

app.get("/", (_: Request, res: Response) => {
  res.send("Hello, World!");
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});



