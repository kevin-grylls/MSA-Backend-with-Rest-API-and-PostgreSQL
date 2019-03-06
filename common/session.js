class RedisSession {
  constructor(redis, session, ttl) {
    this.redis = redis;
    this.session = session;
    this.store = require("connect-redis")(this.session);
    this.ttl = ttl;
  }

  init() {
    if (!this.ttl) {
      console.error("[", new Date(), "]", "TTL is not configured!");
      return new Error("TTL is not configured!");
    }

    return new this.store({
      db: 0,
      client: this.redis,
      logErrors: true,
      ttl: this.ttl
    });
  }
}

class MongoSession {
  constructor(mongoose, session, ttl, config) {
    this.mongoose = mongoose;
    this.session = session;
    this.store = require("connect-mongo")(session);
    this.ttl = ttl;
    this.config = config;
  }

  init() {
    if (!this.ttl) {
      console.error("[", new Date(), "]", "TTL is not configured!");
      return new Error("TTL is not configured!");
    }

    return new this.store({
      url: config.url,
      mongooseConnection: mongoose,
      collection: "sessions",
      ttl: this.ttl,
      autoRemove: "native"
    });
  }
}

module.exports = {
  RedisSession,
  MongoSession
};
