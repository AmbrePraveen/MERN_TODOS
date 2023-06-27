const { getAllTodos, addTodo, updateTodo, deleteTodo } = require("../Controller/todoController")

const router = require("express").Router()
const { body } = require("express-validator")
router
    .get("/", getAllTodos)
    .post("/add-todo",
        [
            body("task", "TASK LENGTH SHOULD BE GREATER THAN 5 CHARACTERS").isLength({ min: 5 }),
            body("priority", "PRIORITY SHOULD BE BETWEEN 1 TO 3").isLength({ min: 1, max: 3 })
        ],
        addTodo)
    .put("/modify/:tid", updateTodo)
    .delete("/destroy/:todoId", deleteTodo)
module.exports = router
