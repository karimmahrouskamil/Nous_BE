import { Schema, model } from 'mongoose';
import { Task } from '../models/task';

const TaskSchema = new Schema<Task>({
  title: { type: String, required: true },
  text: { type: String, required: true },
  status: { type: String, enum: ['TODO', 'IN_PROGRESS', 'DONE'], required: true },
  createdAt: { type: Date, default: Date.now }
}, { collection: 'Task' });

export default model<Task>('Task', TaskSchema);