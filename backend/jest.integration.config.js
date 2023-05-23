/** @type {import('ts-jest').JestConfigWithTsJest} */
// eslint-disable-next-line no-undef
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/__tests__/integration/**/*.test.[jt]s?(x)'],
  setupFilesAfterEnv: [
    './__tests__/integration/setup.ts'
  ]
}