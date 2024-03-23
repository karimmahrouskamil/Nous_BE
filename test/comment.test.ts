import { CommentService } from '../src/services/comment.service'; 
import CommentModel from '../src/schema/comment.schema'; 
import 'jest'; 

jest.mock('../src/schema/comment.schema'); // Mocking the CommentModel module

describe('CommentService', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear mock calls after each test
  });

  describe('createComment', () => {
    it('should create a new comment', async () => {
      // Mocking the create method of CommentModel
      const mockCreate = jest.fn().mockResolvedValueOnce({
        _id: 'commentId',
        text: 'Test comment',
        taskId: 'taskId'
      });

      (CommentModel as jest.Mocked<typeof CommentModel>).create = mockCreate;

      const newComment = await CommentService.createComment('taskId', 'Test comment');

      expect(newComment).toHaveProperty('_id', 'commentId');
      expect(mockCreate).toHaveBeenCalledWith({ text: 'Test comment', taskId: 'taskId' });
    });

    it('should throw an error when comment text is empty', async () => {
      await expect(CommentService.createComment('taskId', '')).rejects.toThrow('Comment text cannot be empty');
    });



  });
});
