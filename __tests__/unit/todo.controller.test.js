import {jest} from '@jest/globals';
import TodoController from '../../controllers/todo.controller';
import TodoModel from '../../model/todo.model';
import httpMocks from 'node-mocks-http';
import newTodo from '../__mock__/data/newTodo.json';

let req, res, next;
beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = null;
});

TodoModel.create = jest.fn();

describe('TodoController.createTodo', () => {
    it('Should have a createTodo function', () => {
        expect(typeof TodoController.createTodo).toBe('function');
    });
    it('Should call TodoModel.create', () => {
        req.body = newTodo;
        TodoController.createTodo(req, res, next);
        expect(TodoModel.create).toBeCalledWith(newTodo);
    });
});