import { NextFunction, Request, Response } from 'express';
import { TaskService } from './../services/task.service';

export const taskController = {
  async getAllTasks(req: Request, res: Response, _next: NextFunction) {
    try {
      const tasks = await TaskService.getAllTasks();
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
