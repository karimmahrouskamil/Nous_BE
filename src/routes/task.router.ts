import express from "express";
import { Router } from "express-serve-static-core";
import { TaskController } from "../controllers/task.controller";

export class TaskRouter {

    public createRoutes(): Router {
        const router = express.Router();
        
        router.get('/', TaskController.getAllTasks); 
        router.get('/:id', TaskController.getTaskById);
        router.put('/:id', TaskController.updateTaskById);
        router.post('/', TaskController.createNewTask);
        return router;
    }
}
