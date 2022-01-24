module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^pages(.*)$': '<rootDir>/src/pages$1',
    '^components(.*)$': '<rootDir>/src/components$1',
    '^store(.*)$': '<rootDir>/src/store$1',
    '^utils(.*)$': '<rootDir>/src/utils$1',
    '^types(.*)$': '<rootDir>/src/types$1',
  },
  setupFilesAfterEnv: ['<rootDir>/src/jest.setup.ts'],
}
