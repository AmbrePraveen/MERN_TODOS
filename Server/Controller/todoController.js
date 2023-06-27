const Todos = require("../Modal/Todos")

const { validationResult } = require("express-validator")
exports.getAllTodos = async (req, res) => {

    try {
        const result = await Todos.find()
        res.json({
            message: "Todos Fetch Success",
            result
        })
    } catch (error) {
        console.log(error)
        res.json({ message: "error ", error })
    }
}
exports.addTodo = async (req, res) => {
    try {
        // console.log(req.body)
        const { data1, Emoji } = req.body
        const result = await Todos.create({ data1, Emoji })
        console.log(result)
        res.json({
            message: "Create Todos  Success",
            // err
            // result
        })
    } catch (error) {
        console.log(error)
        res.json({ message: "error ", error })
    }

}
exports.updateTodo = async (req, res) => {
    try {
        const { tid } = req.params
        const result = await Todos.findByIdAndUpdate(tid, req.body, {
            new: true
        })
        res.json({
            message: "Todos Modify Success",
            result
        })
    } catch (error) {
        console.log(error)
        res.json({ message: "error ", error })
    }
}
exports.deleteTodo = async (req, res) => {
    try {
        const { todoId } = req.params
        console.log(todoId);
        const result = await Todos.findByIdAndDelete(todoId)
        res.json({
            message: "todo Deleted"
        })
    } catch (error) {
        res.json({
            message: "Error ", error
        })
    }
}