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

async function updateTodos(req, res) {
    // var _id = req.body._id;
    var todoData = {
        taskText: req.body.taskText,
        taskStatus: req.body.taskStatus,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
    };
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, todoData);

    res.json(updatedTodo);
    // Todo.findByIdAndUpdate(_id, todoData, function (err, inventory) {
    //   if (err) {
    //     res.status(500);
    //     console.log("Error:"+err);
    //     res.send(err);
    //   } else {
    //     res.status(200);
    //     console.log("Success");
    //     res.send(todoData);
    //   }
    // });
}

async function getTodoByID(req, res) {
    const todo = await Todo.findById(req.params.id);
    res.json(todo);
}

module.exports = {
    createTodos,
    getTodos,
    deleteTodos,
    updateTodos,
    getTodoByID
};