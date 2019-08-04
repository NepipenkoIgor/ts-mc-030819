module.exports = (config) => {
    config.set({
        frameworks: ['jasmine', 'karma-typescript'],
        files: [
            {
                pattern: './src/**/!(index).ts'
            }
        ],
        preprocessors: {
            '**/*.ts': 'karma-typescript'
        },
        reporters: ['progress', 'karma-typescript'],
        browsers: ['ChromeHeadless'],
        logLevel: config.LOG_INFO,
        singleRun: true,
        karmaTypescriptConfig: {
            tsconfig: './tsconfig.json',
            reports: {
                'html': 'coverage',
                'text': ''
            }
        }
    })
}
