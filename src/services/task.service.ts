import { Task } from '../models/task';
import TaskModel from '../schema/task.schema';

export class TaskService {
  public static async getAllTasks(): Promise<Task[]> {
    return TaskModel.find();
  }
  public static async getTaskById(id): Promise<Task | null> {
    return TaskModel.findById(id);
  }
  public static async updateTaskById(id, data): Promise<Task | null> {
    return TaskModel.findByIdAndUpdate(id, data, { new: true })
  }
  public static async createTask(data: Task): Promise<Task> {
    return TaskModel.create(data)
  }
}