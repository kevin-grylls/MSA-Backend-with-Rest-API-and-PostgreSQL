const session = require("express-session");
const redis = require("../../common/redis");
const { RedisSession } = require("../../common/session");

module.exports = app => {
  const config = {
    name: "",
    secret: "Sample",
    saveUninitialized: true,
    resave: false,
    store: new RedisSession(redis, session, 1800).init(),
    cookie: {
      httpOnly: false,
      secure: false,
      maxAge: 1000 * 60 * 30
    }
  };

  app.use(session(config));
};
