import { NextFunction, Request, Response } from 'express';
import { CommentService } from './../services/comment.service';

export class CommentController {
  public static async getAllComments(req: Request, res: Response, _next: NextFunction) {
    try {
     const taskId = req.params.taskId
      const comments = await CommentService.getAllComments(taskId);
      res.status(200).json(comments);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } 
  public static async createComments(req: Request, res: Response, _next: NextFunction) {
    try {
     const taskId = req.params.taskId
     const commentText = req.body.text;
      const comment = await CommentService.createComment(taskId, commentText);
      res.status(201).json(comment);
    } catch (err) {
      if (err.message === 'Comment text cannot be empty') {
        res.status(400).json({ message: 'Comment text is required' });
      } else if (err.message.includes('Task not found')) {
        res.status(404).json({ message: 'Task not found' });
      } else {
        res.status(500).json({ message: err.message });
      }
    }
  } 
  public static async deleteComment(req: Request, res: Response, _next: NextFunction) {
    const taskId = req.params.taskId;
    const commentId = req.params.commentId;
    try {
      await CommentService.deleteComment(taskId, commentId);
      res.status(204).send(); // No content
    } catch (err) {
      if (err.message.includes('Task not found')) {
        res.status(404).json({ message: 'Task not found' });
      } else if (err.message.includes('Cast to ObjectId failed')) {
        res.status(400).json({ message: 'Invalid comment ID' });
      } else {
        res.status(500).json({ message: err.message });
      }
    }
  } 
};
