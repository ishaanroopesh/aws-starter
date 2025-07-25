// routes/todo.routes.js
import express from "express";
import { getTodos, getTodoById, createTodo, updateTodo, deleteTodo } from "../controllers/todo.controller.js";

const router = express.Router();

router.get("/", getTodos);
router.get("/:id", getTodoById);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
