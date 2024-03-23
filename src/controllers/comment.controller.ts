import { NextFunction, Request, Response } from 'express';
import { CommentService } from './../services/comment.service';

export class CommentController {
  public static async getAllComments(req: Request, res: Response, _next: NextFunction) {
    try {
      const comments = await CommentService.getAllComments();
      res.status(200).json(comments);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } 

};
