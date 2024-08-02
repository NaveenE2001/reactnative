import express from "express";
import connectToDB from "./bd.js";
import cors from "cors";
import authRouter from "./routes/authRouter.js";
import noteRouter from "./routes/noteRouter.js";

const port = 5000;
const app = express();
app.use(cors());
connectToDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world from the express");
});

app.use("/api/v1", authRouter);
app.use("/api/v2", noteRouter);

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
