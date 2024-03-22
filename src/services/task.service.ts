import { Task } from '../models/task';
import TaskModel from '../schema/task.schema';

export class TaskService {
  public static async getAllTasks(): Promise<Task[]> {
    return TaskModel.find();
  }
  public static async getTaskById(id): Promise<Task[]> {
    return TaskModel.findById(id);
  }
  public static async updateTaskById(id, data): Promise<Task[]> {
    return TaskModel.findByIdAndUpdate(id, data, { new: true })
  }
}