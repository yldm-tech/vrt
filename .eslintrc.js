module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		node: true,
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended'
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 12,
		'sourceType': 'module'
	},
	'settings': {
		'react': {
			'version': 'detect'
		}
	},
	'globals': {
		'window': true,
		'module': true
	},
	'plugins': [
		'react',
		'@typescript-eslint'
	],
	'rules': {
		'indent': [
			'off',
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'@typescript-eslint/no-var-requires': 'off',
		'no-mixed-spaces-and-tabs':0,
	}
};
