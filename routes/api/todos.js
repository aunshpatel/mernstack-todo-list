const express = require('express');
const router = express.Router();
const todosCtrl = require('../../controllers/api/todos');

// GET /api/todos for fetching all todos
router.get('/', todosCtrl.getTodos);

// POST /api/create for creating a new todo
router.post('/create', todosCtrl.createTodos);

//DELETE /DELETE/:id for DELETING individual todo
router.delete('/delete/:id', todosCtrl.deleteTodos);

//PUT /update/:id for updating individual todo
router.put('/update/:id', todosCtrl.updateTodos);

//GET /:id for fetching individual todo
router.get('/:id', todosCtrl.getTodoByID);

module.exports = router;