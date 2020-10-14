const lodash = require("lodash");

module.exports = lodash.merge(require("../../../jest.common"), {
  testEnvironment: "jsdom",
});
