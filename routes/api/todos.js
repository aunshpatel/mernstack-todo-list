const express = require('express');
const router = express.Router();
const todosCtrl = require('../../controllers/api/todos');

// GET /api/todos
router.get('/', todosCtrl.getTodos);

// POST /api/create
router.post('/create', todosCtrl.createTodos);

router.delete('/delete/:id', todosCtrl.deleteTodos);

router.put('/update/:id', todosCtrl.updateTodos);

router.get('/:id', todosCtrl.getTodoByID);

module.exports = router;