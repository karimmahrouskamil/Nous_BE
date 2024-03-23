
import { TaskService } from '../src/services/task.service';
import TaskModel from '../src/schema/task.schema';
import 'jest';
import { Task } from '../src/models/task';

jest.mock('../src/schema/comment.schema'); // Mocking the CommentModel module

describe('CommentService', () => {
    afterEach(() => {
        jest.clearAllMocks(); // Clear mock calls after each test
    });

    describe('createComment', () => {



        it('should create a new task with the provided data', async () => {
            // Mock the create method of TaskModel to resolve with the created task
            const mockCreate = jest.fn().mockResolvedValueOnce({
                title: 'New Task',
                text: 'This is a new task description',
                status: 'TODO',
                createdAt: expect.any(Date), // Any valid Date object
                comments: [],
            });
            (TaskModel as jest.Mocked<typeof TaskModel>).create = mockCreate;

            // Create a new task with valid data (typed according to Task interface)
            const newTaskData = {
                title: 'New Task',
                text: 'This is a new task description',
                status: 'TODO',
            } as Task;

            const createdTask = await TaskService.createTask(newTaskData);

            // Verify that the create method was called with the correct data
            expect(mockCreate).toHaveBeenCalledWith(newTaskData);

            // Assert properties of the created task
            expect(createdTask.title).toBe(newTaskData.title);
            expect(createdTask.text).toBe(newTaskData.text);
            expect(createdTask.status).toBe(newTaskData.status);
            // No need to directly compare dates, expect.any(Date) ensures a valid Date object
            expect(createdTask.createdAt).toEqual(expect.any(Date));
            expect(createdTask.comments).toEqual([]); // Empty comments array as defined in the mock
        });




    });
});
