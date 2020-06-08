module.export = {
  roots: ["<rootDir>/src"],
  preset: "ts-jest",
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "./_tests_/.*\\test.(ts|tsx)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupTestFrameworkScriptFile: ["<rootDir>/src/_tests_/setupTests.ts"],
  collectCoverage: true,
  collectCoverageFrom: [
    "app/react/**/*.{ts,tsx}",
    "!src/_tests_/api/api-test-helpers.ts",
  ],
};
