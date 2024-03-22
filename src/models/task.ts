import { Document } from 'mongoose';

export interface Task extends Document {
  title: string;
  text: string;
  status: 'TODO' | 'IN_PROGRESS' | 'DONE';
  createdAt: Date;
}




