module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  preset: '@shel/jest-mongodb',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
