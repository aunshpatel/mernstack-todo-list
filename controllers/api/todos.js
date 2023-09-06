const Todo = require('../../models/todo');

async function createTodos(req, res) {
    const todo = await Todo.create({
        taskText: req.body.taskText,
        taskStatus: req.body.taskStatus,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        user: req.user._id
    });
    res.json(todo);
}

async function getTodos(req, res) {
    const todos = await Todo.find({ user: req.user._id });
    res.json(todos);
}

async function deleteTodos(req, res) {
    await Todo.findByIdAndRemove(req.params.id);
}

module.exports = {
    createTodos,
    getTodos,
    deleteTodos
};