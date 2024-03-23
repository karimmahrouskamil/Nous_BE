import { Comment } from "../models/comment";
import { Schema, model } from 'mongoose';

const commentSchema = new Schema<Comment>({
    text: { type: String, required: true },
    taskId: { type: Schema.Types.ObjectId, ref: 'Task', required: true },
  }, { collection: 'Comment' });
  
  export default model<Comment>('Comment', commentSchema)