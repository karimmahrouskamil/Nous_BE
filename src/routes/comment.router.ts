import express from "express";
import { Router } from "express-serve-static-core";
import { CommentController } from "../controllers/comment.controller";

export class CommentRouter {

    public createRoutes(): Router {
        const router = express.Router();

        router.get('/:taskId', CommentController.getAllComments);
        router.post('/:taskId/comments', CommentController.createComments);
        
        return router;
    }
}
