// module.exports={
//     preset: 'jest-preset-angular',
//     setupFilesAfterEnv: ['<rootDir>/test-setup.ts', 'jest-canvas-mock'],
//     moduleNameMapper:{
//         '@core/(.*)':'<rootDir>/src/app/core/$1',
//     },
//     globals:{
//         'ts-jest':{
//             tsconfig:'<rootDir>/tsconfig.json',
//             allowSyntheticDefaultImports:true
//         }
//     },
//     roots:['<rootDir>/src'],
//     modulePathIgnorePatterns: ['<rootDir>/dist/'],
//     modulePaths:['<rootDir>'],
//     transformIgnorePatterns:['node_modules/(?!(jest-test|@ngxs))'],
//     collectCoverage:true,
//     coverageDirectory: '<rootDir>/coverage/',
//     collectCoverageFrom:[
//         'src/**/*.ts'
//     ],
//     coveragePathIgnorePatterns:[
//         'node_modules',
//         'test-config',
//         'interfaces',
//         'jestGlobalMocks.ts',
//         '.module.ts',
//         '<rootDir>/src/main.ts',
//         '<rootDir>/src/polyfills.ts',
//         '<rootDir>/src/app/@types/jsencrypt',
//         '.mock.ts',
//         '.index.ts',
//         '.model.ts',
//         'src/environments/*',
//         //EXCEPCIONES
//         '<rootDir>/src/app/pages/greetings/*'
//     ],
//     coverageThreshold:{
//         global:{
//             'branches': 50,
//             'functions': 50,
//             'lines': 90,
//             'statements':90
//         }
//     }
// };