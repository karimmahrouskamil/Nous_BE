import { NextFunction, Request, Response } from 'express';
import { TaskService } from './../services/task.service';

export class TaskController {
  public static async getAllTasks(req: Request, res: Response, _next: NextFunction) {
    try {
      const tasks = await TaskService.getAllTasks();
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  public static async getTaskById(req: Request, res: Response, _next: NextFunction) {
    try {
      const id = req.params.id
      const tasks = await TaskService.getTaskById(id);
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
