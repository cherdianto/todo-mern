import express from 'express'
import {
    getTodos,
    getTodo,
    addTodo,
    updateTodo,
    deleteTodo
} from '../controllers/index.js'

const router = express.Router()

// method : GET
// purpose : get all todos
// endpoint : /api/todos
router.get('/todos', getTodos)

// method : GET
// purpose : get single todo based on todo's ID
// endpoint : /api/todo/:id
router.get('/todo/:id', getTodo)

// method : POST
// purpose : add a new todo
// endpoint : /api/todo
router.post('/add-todo', addTodo)

// method : PUT
// purpose : edit single todo based on todo's ID
// endpoint : /api/todo/:id
router.put('/update-todo/:id', updateTodo)

// method : DELETE
// purpose : remove/delete single todo based on todo's ID
// endpoint : /api/todo/:id
router.delete('/delete-todo/:id', deleteTodo)

export default router