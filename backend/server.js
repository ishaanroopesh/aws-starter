import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import todoRoutes from "./routes/todo.route.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use("/api/todos", todoRoutes);

<<<<<<< HEAD
app.listen(port, '0.0.0.0', () => {
  connectDB();
  console.log(`Server started at http://0.0.0.0:${port}`);
=======
app.listen(port, "0.0.0.0", () => {
	connectDB();
	console.log(`Server started at http://localhost:${port}`);
>>>>>>> 61a4d1eb9e651281b2f1f0e0915c3779f890e551
});
