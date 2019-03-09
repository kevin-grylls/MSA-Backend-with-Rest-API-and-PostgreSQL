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

module.exports = {
  RedisSession
};
