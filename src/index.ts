import { Application } from "./app";
import  { connectDB} from './../config'
class AssessmentNous {
  public static start() {
    console.info('starting...');
    const port = 3030;
    const app = new Application();
    app.init().then(async () => {
     await connectDB();
      app.express.listen(port, () => {
        console.info("*****************************************************************************");
        console.info(`**                         ASSESSMENT NOUS                                 **`);
        console.info(`** Server started - listening on 3030                                      **`);
        console.info("*****************************************************************************");
      }).on('error', (err) => {
        if (err) {
          return console.error(err);
        }
      });
    }).catch((err) => {
      if (err) {
        return console.error(err);
      }
    });

    
  }
}
AssessmentNous.start();
