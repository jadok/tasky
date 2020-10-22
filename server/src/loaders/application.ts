import { ExpressConfig } from './express';

import { GraphqlLoader } from './graphql';

export class Application {

  server: any;
  express: ExpressConfig;

  constructor() {
    this.express = new ExpressConfig();
  }

  start = async () => {
    const port = 3000;
    await GraphqlLoader(this.express.app);
    this.server = this.express.app.listen(port, () => {
      console.log(`\n🚀      GraphQL is now running on http://localhost:3000/graphql`)
    });
  }

}
