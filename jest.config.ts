import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/specs/**/*.spec.ts', '**/unit/**/*.test.ts'],
};

export default config;
