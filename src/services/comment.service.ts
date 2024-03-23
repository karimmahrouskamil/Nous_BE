import { Comment } from '../models/comment'; 
import CommentModel from '../schema/comment.schema';

export class CommentService {
  public static async getAllComments(): Promise<Comment[]> {
    return CommentModel.find();
  }
}