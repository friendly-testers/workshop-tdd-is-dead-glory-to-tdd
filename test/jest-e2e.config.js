/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable unicorn/prefer-module */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable unicorn/prevent-abbreviations */
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('../tsconfig.json');

module.exports = {
    moduleFileExtensions: ['js', 'json', 'ts'],
    rootDir: './../',
    testEnvironment: 'node',
    preset: 'ts-jest',
    testRegex: '.(e2e-spec|e2e.test).ts$',
    transform: {
        '^.+\\.(t|j)s$': 'ts-jest',
    },
    setupFilesAfterEnv: ['./jest.setup.ts'],
    modulePaths: [compilerOptions.baseUrl],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>/',
    }),
    clearMocks: true,
};
