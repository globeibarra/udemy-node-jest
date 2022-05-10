import TodoModel from "../model/todo.model";

const TodoController = {
    createTodo: (req, res, next) => {
        TodoModel.create(req.body);
    }
}

export default TodoController;