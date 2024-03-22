import express, { NextFunction, Request, Response } from "express";
import { Router } from "express-serve-static-core";
import { taskController } from "../controllers/task.controller";

export class TaskRouter {

    public createRoutes(): Router {
        const router = express.Router();

        router.get('/', taskController.getAllTasks);

        return router;
    }
}
