import express, { Application } from 'express';
import compression from 'compression';
import cors from 'cors';
// import { createExpressServer } from 'routing-controllers';

// import { env } from '../env';

export class ExpressConfig {

  app:  Application;

  plugins: any[] = [];
  constructor() {

    /**
     * We create a new express server instance.
     * We could have also use useExpressServer here to attach controllers to an existing express instance.
     */
    this.app = express();
    this.app.use('*', cors());
    this.app.use(compression());
  }

};
