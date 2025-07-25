import mongoose from "mongoose";
import Todo from "../models/todo.model.js";

// Get all todos
export const getTodos = async (req, res) => {
	try {
		const todos = await Todo.find().sort({ createdAt: -1 });
		res.status(200).json({ success: true, data: todos });
	} catch (error) {
		console.error("Error retrieving todos:", error);
		res.status(500).json({ success: false, message: "Server Error" });
	}
};

// Get a single todo by ID
export const getTodoById = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ success: false, message: "Invalid ObjectID" });
	}

	try {
		const todo = await Todo.findById(id);
		if (!todo) {
			return res.status(404).json({ success: false, message: "Todo not found" });
		}
		res.status(200).json({ success: true, data: todo });
	} catch (error) {
		console.error("Error fetching todo:", error);
		res.status(500).json({ success: false, message: "Server Error" });
	}
};

// Create a new todo
export const createTodo = async (req, res) => {
	const newTodo = new Todo(req.body);

	try {
		await newTodo.save();
		res.status(201).json({ success: true, data: newTodo });
	} catch (error) {
		console.error("Error creating todo:", error);
		res.status(500).json({ success: false, message: "Server Error" });
	}
};

// Update an existing todo
export const updateTodo = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ success: false, message: "Invalid ObjectID" });
	}

	try {
		const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
		if (!updatedTodo) {
			return res.status(404).json({ success: false, message: "Todo not found" });
		}
		res.status(200).json({ success: true, data: updatedTodo });
	} catch (error) {
		console.error("Error updating todo:", error);
		res.status(500).json({ success: false, message: "Server Error" });
	}
};

// Delete a todo by ID
export const deleteTodo = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ success: false, message: "Invalid ObjectID" });
	}

	try {
		const todo = await Todo.findByIdAndDelete(id);
		if (!todo) {
			return res.status(404).json({ success: false, message: "Todo not found" });
		}
		res.status(200).json({ success: true, message: "Todo deleted successfully" });
	} catch (error) {
		console.error("Error deleting todo:", error);
		res.status(500).json({ success: false, message: "Server Error" });
	}
};
