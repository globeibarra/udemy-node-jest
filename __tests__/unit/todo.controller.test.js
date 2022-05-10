import {jest} from '@jest/globals';
import TodoController from '../../controllers/todo.controller';
import TodoModel from '../../model/todo.model';

TodoModel.create = jest.fn();

describe('TodoController.createTodo', () => {
    it('Should have a createTodo function', () => {
        expect(typeof TodoController.createTodo).toBe('function');
    });
    it('Should call TodoModel.create', () => {
        TodoController.createTodo();
        expect(TodoModel.create).toBeCalled();
    });
});