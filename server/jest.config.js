
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  reporters: ["default"],
  testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.(ts?)$",
  verbose: true,
  collectCoverage: true,
  coveragePathIgnorePatterns: ["/node_modules/"],
  coverageReporters: ["text"],
  moduleFileExtensions: ["js", "ts", "graphql"],
};
