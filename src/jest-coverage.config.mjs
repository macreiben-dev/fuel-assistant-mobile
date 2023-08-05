/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import NoCoverageConfig from "./jest-no-coverage.config.mjs";

export default {
  ...NoCoverageConfig,
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "../coverage",

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/web-build/**",
  ],

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: ["/tests/", "/node_modules/", "/web-build/"],

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: ["text", "lcov", "cobertura"],

  // Use this configuration option to add custom reporters to Jest
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "../test-results",
        outputName: "junit.xml",
      },
    ],
  ],
};
