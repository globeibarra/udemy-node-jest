import TodoController from '../../controllers/todo.controller';

describe('TodoController.createTodo', () => {
    it('Should have a createTodo function', () => {
        expect(typeof TodoController.createTodo).toBe('function');
    });
});