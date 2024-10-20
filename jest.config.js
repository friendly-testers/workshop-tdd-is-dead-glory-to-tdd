const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
    rootDir: './',
    preset: 'ts-jest',
    testEnvironment: 'node',
    testRegex: '.*\\.(spec|test)\\.ts$',
    transform: {
        '^.+\\.(t|j)s$': 'ts-jest',
    },
    collectCoverage: true,
    collectCoverageFrom: ['**/*.(t|j)s'],
    coverageDirectory: './coverage',
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '/test/',
        '/dist/',
        '/coverage',
        '.eslintrc.js',
        'jest.config.js',
        '/*/*/index.ts',
        '.*.provider.ts$',
        '.*.module.ts$',
        '.*.model.ts$',
        '.*.interface.ts$',
        '.*.mock.ts$',
        '.*.dto.ts$',
        '.*\\.(spec|test)\\.(t|j)s$',
        '__mocks__',
    ],
    moduleFileExtensions: ['js', 'json', 'ts'],
    clearMocks: true,
    setupFilesAfterEnv: ['./jest.setup.ts'],
    reporters: [
        'default',
        [
            'jest-sonar',
            {
                outputDirectory: './',
                outputName: 'test-report.xml',
            },
        ],
    ],
    testPathIgnorePatterns: ['/test/'],
    modulePaths: [compilerOptions.baseUrl],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
    passWithNoTests: true,
};
