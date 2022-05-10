import Mongoose from "mongoose";

const TodoSchema = new Mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        required: true
    }
});

const TodoModel = Mongoose.model('Todo', TodoSchema);

export default TodoModel;