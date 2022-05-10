import TodoModel from "../model/todo.model";

const TodoController = {
    createTodo: (req, res, next) => {
        TodoModel.create(req.body);
        res.status(201).send();
    }
}

export default TodoController;