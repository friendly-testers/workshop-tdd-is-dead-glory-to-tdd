module.exports = {
    settings: {
        'import/resolver': {
            typescript: {
                project: './tsconfig.json',
            },
        },
        jest: {
            version: require('jest/package.json').version,
        },
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        tsconfigRootDir: __dirname,
        sourceType: 'module',
        ecmaVersion: 'latest',
    },
    plugins: [
        '@typescript-eslint/eslint-plugin',
        'prettier',
        'unused-imports',
        'import',
        'jest',
        'jest-extended',
        'jest-formatting',
        'lodash',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/strict',
        'plugin:@typescript-eslint/stylistic',
        'plugin:prettier/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:lodash/canonical',
    ],
    root: true,
    env: {
        node: true,
        jest: true,
        es2024: true,
    },
    ignorePatterns: ['.eslintrc.mjs', 'jest.config.js', 'jest.setup.ts'],
    rules: {
        'import/no-named-as-default': 'off',
        'sort-imports': [
            'error',
            {
                ignoreCase: false,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
                allowSeparatedGroups: false,
            },
        ],
        'import/no-unresolved': 'error',
        'import/order': [
            'warn',
            {
                'newlines-between': 'never',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
        'lodash/import-scope': ['error', 'full'],
        'lodash/prefer-lodash-method': 'off',
        'lodash/prefer-constant': 'off',
        'prettier/prettier': 'error',
        'no-duplicate-imports': 2,
        'no-eval': 2,
        'no-implied-eval': 2,
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'unused-imports/no-unused-imports': 'error',
        indent: [0],
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'parameter',
                format: ['camelCase'],
                leadingUnderscore: 'allow',
            },
            {
                selector: ['class', 'interface', 'enum'],
                format: ['PascalCase'],
            },
            {
                selector: 'enumMember',
                format: ['UPPER_CASE'],
            },
            {
                selector: 'typeLike',
                format: ['PascalCase'],
            },
            // Interface starts with I
            {
                selector: 'interface',
                format: ['PascalCase'],
                custom: {
                    regex: '^I[A-Z]',
                    match: true,
                },
            },
            // private member and variables should start with _
            {
                selector: ['memberLike'],
                modifiers: ['private'],
                format: ['camelCase'],
                leadingUnderscore: 'require',
            },
            // private property should start with _
            {
                selector: ['property'],
                modifiers: ['private'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'require',
            },
            {
                selector: ['accessor'],
                modifiers: ['private'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'allow',
            },
            {
                selector: ['variable'],
                format: ['PascalCase', 'camelCase', 'UPPER_CASE'],
                modifiers: ['const'],
            },
            // all variables, functions and properties follow are camelCase
            { selector: 'variableLike', format: ['camelCase'] },
        ],
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
        'no-magic-numbers': 'off',
        '@typescript-eslint/no-magic-numbers': [
            'error',
            {
                ignoreEnums: true,
                ignoreNumericLiteralTypes: true,
                ignoreTypeIndexes: true,
            },
        ],
        '@typescript-eslint/no-extraneous-class': ['error', { allowStaticOnly: true }],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/prefer-enum-initializers': 'error',
        '@typescript-eslint/method-signature-style': ['error', 'method'],
        '@typescript-eslint/explicit-member-accessibility': [
            'error',
            {
                overrides: {
                    accessors: 'no-public',
                    constructors: 'no-public',
                    methods: 'explicit',
                    parameterProperties: 'explicit',
                    properties: 'explicit',
                },
            },
        ]
    },
    overrides: [
        {
            files: ['*.spec.ts', '*.test.ts', '*.e2e-spec.ts'],
            extends: [
                'plugin:jest/recommended',
                'plugin:jest/style',
                'plugin:jest-extended/all',
                'plugin:jest-formatting/strict',
            ],
            rules: {
                '@typescript-eslint/no-magic-numbers': 'off',
                '@typescript-eslint/explicit-function-return-type': 'off',
                '@typescript-eslint/no-explicit-any': 'off',
                '@typescript-eslint/no-use-before-define': 'off',
                '@typescript-eslint/no-empty-function': 'off',
                'jest/no-disabled-tests': 'error',
                'jest/no-focused-tests': 'error',
                'jest/no-identical-title': 'error',
                'jest/prefer-to-have-length': 'warn',
                'jest/valid-expect': 'error',
                'jest/no-mocks-import': 'off',
                'jest/consistent-test-it': ['error', { fn: 'it', withinDescribe: 'it' }],
                'jest/no-confusing-set-timeout': 'warn',
                'jest/no-duplicate-hooks': 'error',
                'jest/no-export': 'warn',
                'jest/no-large-snapshots': 'error',
                'jest/no-test-prefixes': 'off',
                'jest/no-test-return-statement': 'error',
                'jest/prefer-called-with': 'warn',
                'jest/prefer-comparison-matcher': 'warn',
                'jest/prefer-each': 'error',
                'jest/prefer-equality-matcher': 'error',
                'jest/prefer-expect-resolves': 'error',
                'jest/prefer-hooks-on-top': 'error',
                'jest/prefer-hooks-in-order': 'error',
                'jest/prefer-lowercase-title': ['error', { ignoreTopLevelDescribe: true }],
                'jest/prefer-mock-promise-shorthand': 'error',
                'jest/prefer-spy-on': 'warn',
                'jest/require-top-level-describe': [
                    'error',
                    {
                        maxNumberOfTopLevelDescribes: 2,
                    },
                ],
                'jest/max-expects': [
                    'warn',
                    {
                        max: 3,
                    },
                ],
            },
        },
        {
            files: ['*.module.ts'],
            rules: {
                '@typescript-eslint/no-extraneous-class': ['error', { allowWithDecorator: true }],
            },
        },
    ],
};
