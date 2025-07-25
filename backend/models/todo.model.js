import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		trim: true,
	},
	description: {
		type: String,
		default: "",
	},
	status: {
		type: String,
		enum: ["pending", "in-progress", "completed"],
		default: "pending",
	},
	dueDate: {
		type: Date,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
