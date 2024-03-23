import { Document } from 'mongoose';
import { Comment } from './comment';

export interface Task extends Document {
  title: string;
  text: string;
  status: 'TODO' | 'IN_PROGRESS' | 'DONE';
  createdAt: Date;
  comments?: Comment[];
}




