import { Schema, model } from 'mongoose';
import { Task } from '../models/task';

const TaskSchema = new Schema<Task>({
  title: { type: String, required: false },
  text: { type: String, required: false },
  status: { type: String, enum: ['TODO', 'IN_PROGRESS', 'DONE'], required: false },
  createdAt: { type: Date, default: Date.now },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment', required: true }],
}, { collection: 'Task' });

export default model<Task>('Task', TaskSchema);