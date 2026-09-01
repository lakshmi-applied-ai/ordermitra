const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: "./" });

/** @type {import('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",

  // Which files count towards the coverage report.
  // Chapter 2's whole lesson depends on this being honest — if you exclude
  // files here, the percentage stops meaning anything.
  collectCoverageFrom: [
    "components/**/*.{ts,tsx}",
    "lib/**/*.{ts,tsx}",
    "!**/*.d.ts",
    "!components/cancel-order-dialog.tsx",
  ],

  coverageThreshold: {
    global: {
      statements: 30,
      branches: 30,
      functions: 30,
      lines: 30,
    },
  },
};

module.exports = createJestConfig(customJestConfig);
