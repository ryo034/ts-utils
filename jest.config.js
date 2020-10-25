process.env.NODE_ENV = 'test'
module.exports = {
  verbose: true,
  preset: 'ts-jest',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: { '^@/(.*)$': '<rootDir>/src/$1' },
  transform: {
    '^.+\\.(js|jsx|mjs)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  transformIgnorePatterns: ['/node_modules/(?!(xxxx.*?\\.js$))'],
  globals: { 'ts-jest': { tsConfig: 'tsconfig.json' } },
  collectCoverage: true,
  testPathIgnorePatterns: ['/lib/', '/node_modules/'],
  testMatch: ['**/__tests__/**/*.spec.+(ts|tsx|js)', '**/__tests__/**/*.test.+(ts|tsx|js)']
}
