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
      const task = await TaskService.getTaskById(id);
      res.status(200).json(task);
    } catch (error) { 
      _next(error);
      // res.status(500).json({ error: error.message });
    }
  }
  public static async updateTaskById(req: Request, res: Response, _next: NextFunction) {
    try {
      const id = req.params.id
      const body = req.body
      const task = await TaskService.updateTaskById(id, body);
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  public static async createNewTask(req: Request, res: Response, _next: NextFunction) {
    try {
      const newTaskBody = req.body 
      const newTask = await TaskService.createTask(newTaskBody);
      res.status(201).json(newTask);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

};
