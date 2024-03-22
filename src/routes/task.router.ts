import express, { NextFunction, Request, Response } from "express";
import { Router } from "express-serve-static-core";
import { TaskController } from "../controllers/task.controller";

export class TaskRouter {

    public createRoutes(): Router {
        const router = express.Router();
        // http://localhost:3030/tasks/
        router.get('/', TaskController.getAllTasks);
        // http://localhost:3030/tasks/65fda3820a8e8f8481a91581
        router.get('/:id', TaskController.getTaskById);

        return router;
    }
}
