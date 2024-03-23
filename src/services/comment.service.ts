import { Comment } from '../models/comment';
import CommentModel from '../schema/comment.schema';

export class CommentService {
    public static async getAllComments(taskId: string): Promise<Comment[]> {
        return await CommentModel.find({ taskId: taskId });
    }

    public static async createComment(taskId: string, comment: string): Promise<Comment> {
        if (!comment) {
            throw new Error('Comment text cannot be empty');
        }
        const newComment = ({ text: comment, taskId } as Comment);
        return (await CommentModel.create(newComment));
    }
   
    public static async deleteComment(taskId: string, commentId: string): Promise<void> {
        await CommentModel.findByIdAndDelete({ _id: commentId, taskId: taskId });
      }
}