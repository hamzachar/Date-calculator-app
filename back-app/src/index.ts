import express, { Request, Response } from "express";

const app = express();
var cors = require("cors");
const PORT = 3001;

app.use(cors());

app.get("/api/date", (req: Request, res: Response) => {
  res.json({ date: new Date().toISOString().split("T")[0] });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
