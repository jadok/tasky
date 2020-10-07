import 'reflect-metadata';

import { Application } from './loaders/application';

export const runningApp = () => {
  const app = new Application();
  app.start();
}

export default runningApp()
