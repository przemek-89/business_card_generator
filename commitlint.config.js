// commitlint.config.js
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'header-max-length': [1, 'always', 72],
        'type-enum': [
            2,
            'always',
            ['feat', 'fix', 'docs', 'chore', 'refactor', 'test', 'perf', 'style', 'ci', 'build', 'revert'],
        ],
    },
};
