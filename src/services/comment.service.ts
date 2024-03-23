import { Comment } from '../models/comment'; 
import CommentModel from '../schema/comment.schema';

export class CommentService {
  public static async getAllComments(taskId: string): Promise<Comment[]> {
    return await CommentModel.find({ taskId: taskId });
  }
 
}