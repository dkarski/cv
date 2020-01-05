import * as express from 'express';
import * as bodyParser from 'body-parser';

import config from './config/main';

export class Server {
  app: express.Application;

  static bootstrap(): Server {
    return new Server();
  }

  constructor() {
    this.app = express();
    this.configure();
    this.middleware();
    this.api();
  }

  /**
   * Configure application
   *
   * @class Server
   * @method config
   */
  configure() {
    this.app.set('port', config.port);
    this.app.listen(config.port);
  }

  /**
   * Create REST API routes
   *
   * @class Server
   * @method api
   */
  public api() {
    this.app.use(express.static('public'))
  }

  /**
   * Add express middleware
   *
   * @class Server
   * @method api
   */
  public middleware() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}

Server.bootstrap();
