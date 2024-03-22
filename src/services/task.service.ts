import Task from '../models/task';

export const taskService = {
  async getAllTasks() {
    return Task.find();
  }
};
