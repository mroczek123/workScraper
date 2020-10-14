const path = require("path");

module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "@src/(.*)": path.resolve(__dirname, "src", "$1"),
  },
  testPathIgnorePatterns: ["./node_modules/(.*)", "./dist/(.*)"],
  globals: {
    "ts-jest": {
      diagnostics: {
        ignoreCodes: [151001],
      },
    },
  },
};
