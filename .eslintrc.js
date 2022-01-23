module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['google', 'prettier', 'plugin:prettier/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint'],
	rules: {
		'new-cap': ['off', { properties: false }],
	},
};
