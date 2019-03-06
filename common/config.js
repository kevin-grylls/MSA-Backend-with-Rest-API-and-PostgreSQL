export default {
  configurations: {
    serviceOne: {
      development: { ssl: false, port: 8081, hostname: "localhost" },
      production: { ssl: true, port: 8081, hostname: "domain.com" }
    },
    serviceThree: {
      development: { ssl: false, port: 8083, hostname: "localhost" },
      production: { ssl: true, port: 8083, hostname: "domain.com" }
    }
  },
  service: {
    port: {
      serviceOne: {
        development: 8081,
        production: 8081
      },
      serviceTwo: {
        development: 8082,
        production: 8082
      },
      serviceThree: {
        development: 8083,
        production: 8083
      }
    }
  }
};
