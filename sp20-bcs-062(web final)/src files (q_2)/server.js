import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/review", blogRouter);

const connection_url =
  "mongodb+srv://admin:abcd1234@cluster0.imyamaj.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(connection_url)
  .then(() => console.log("connected!!!"))
  .catch((err) => console.log(err));

app.listen(port, () => console.log(`listening on localhost: ${port}`));
