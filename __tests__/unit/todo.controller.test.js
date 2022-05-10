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
    beforeEach(() => {
        req.body = newTodo;
    });
    it('Should have a createTodo function', () => {
        expect(typeof TodoController.createTodo).toBe('function');
    });
    it('Should call TodoModel.create', () => {
        TodoController.createTodo(req, res, next);
        expect(TodoModel.create).toBeCalledWith(newTodo);
    });
    it('Should return 201 response code', () => {
        TodoController.createTodo(req, res, next);
        expect(res.statusCode).toBe(201);
        expect(res._isEndCalled()).toBeTruthy();
    });
});