
export default {
  TAG: {
    ok: 'will use everywhere!'
  },
  SERVER: {
    scheme: process.env.HTTP_SERVER_SCHEME || 'http',
    host: process.env.HTTP_SERVER_HOST || 'localhost',
    port: process.env.HTTP_SERVER_PORT || 8000,
  },
  DOCS: {
    swagger: {
      title: process.env.DOCS_SWAGGER_TITLE || 'Swagger API',
      description: process.env.DOCS_SWAGGER_DESCRIPTION || '*** API server',
      version: process.env.DOCS_SWAGGER_VERSIO || '1.0',
    },
  },
  DB: {
    mongo: {
      dbUrl: process.env.APP_MONGO_URL || 'mongodb://localhost:27017/testDb',
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      },
    },
    redis: {
      appStore: {
        url: process.env.APP_REDIS_URL || 'redis://localhost:6379',
        password: process.env.APP_REDIS_PASSWORD,
      },
    },
  },
  QUEUES: {
    app_queue: {
      name: 'app:queue',
      redis: {
        url: process.env.APP_QUEUE_REDIS_URL || 'redis://localhost:6379',
        password: process.env.APP_QUEUE_REDIS_PASSWORD,
      },
    },
  },
  SOCKET_IO: {
    redis: {
      url: process.env.SOCKET_IO_REDIS_URL || 'redis://localhost:6379',
      password: process.env.SOCKET_IO_REDIS_PASSWORD,
    },
  },
  LOGGING: {
    morgan: {
      format: process.env.MORGAN_FORMAT || 'dev',
    },
  },
  JWT: {
    secret: process.env.JWT_SECRET || 'super-secret',
    expireIn: process.env.JWT_EXPIRE_IN || 172800,
    issuer: process.env.JWT_ISSUER || 'App Corp',
    audience: process.env.JWT_AUDIENCE || 'app.se',
  },
  MAIL: {
    apiKey: process.env.MAIL_API_KEY,
    fromMail: process.env.MAIL_FROM || 'noreply@app.com',
  },
  UserRoles: {
    onwer: 1,
    user: 2,
    admin: 3,
  },
  RATE_LIMIT: {
    points: process.env.RATE_LIMIT_GLOBAL_POINTS || 15,
    duration: process.env.RATE_LIMIT_GLOBAL_DURATION || 5,
  },
};
