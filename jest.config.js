module.exports = {
  preset: 'jest-preset-angular',
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text-summary'],
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.spec.ts',
    '!src/main.ts',
    '!src/app/app.config.ts',
    '!src/app/app.routes.ts',
    '!src/polyfills.ts',
    '!src/environments/**',
    '!src/**/*.module.ts'
  ]
};
