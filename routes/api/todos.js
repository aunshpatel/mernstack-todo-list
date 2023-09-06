const express = require('express');
const router = express.Router();
const todosCtrl = require('../../controllers/api/todos');

// GET /api/notes
router.get('/', todosCtrl.getTodos);

// POST /api/notes
router.post('/create', todosCtrl.createTodos);

router.delete('/delete/:id', todosCtrl.deleteTodos);

module.exports = router;