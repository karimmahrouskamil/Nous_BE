import { Task } from '../models/task';
import TaskModel from '../schema/task.schema';

export class TaskService {
  public static async getAllTasks(): Promise<Task[]> {
    return TaskModel.find();
  }
  public static async getTaskById(id: string): Promise<Task[] | any> {
    const foundTask = TaskModel.findById(id).populate('comments')
    if (!foundTask) {
      throw new Error('Task not found');
  }
    return foundTask;
  }
  public static async updateTaskById(id: string, data): Promise<Task | null> {
    return TaskModel.findByIdAndUpdate(id, data, { new: true })
  }
  public static async createTask(data: Task): Promise<Task> {
    return TaskModel.create(data)
  }
}