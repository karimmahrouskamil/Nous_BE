import express, { NextFunction, Request, Response } from 'express';
import { TaskRouter } from './routes/task.router';
import bodyParser from 'body-parser'
import { CommentRouter } from './routes/comment.router';
export class Application {
  public express;

  public init(): Promise<void> {
    return new Promise((resolve, _reject) => {
      const taskRouter: TaskRouter = new TaskRouter();
      const commentRouter: CommentRouter = new CommentRouter();
      this.express = express();

      this.express.use(bodyParser.urlencoded({
        extended: true
      }));
      this.express.use(bodyParser.json());
      this.express.use((err: any, req: Request, res: Response, next: NextFunction) => {
        console.error(err.stack);
        if (err.message === 'Task not found') {
          res.status(404).json({ error: 'Task not found' });
        } else {
          res.status(500).send('Something broke!');
        }
      });

      this.express.use('/comments', commentRouter.createRoutes());
      this.express.use('/tasks', taskRouter.createRoutes());
      resolve();
    })
  }
}
