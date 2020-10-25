/* eslint-disable max-len */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'jest/globals': true
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint'
  ],
  plugins: ['@typescript-eslint', 'jest', 'prettier'],
  rules: {
    // DOC: https://eslint.org/docs/rules/no-param-reassign
    // 引数に再代入するかどうか
    'no-param-reassign': 1,
    // DOC: https://eslint.org/docs/rules/no-debugger
    // debuggerの使用を禁止するかどうか
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // DOC: https://eslint.org/docs/rules/no-console
    // consoleの使用を禁止するかどうか
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // eslint-config-airbnb利用時のeslintのエラーを解消するため。no-extraneous-dependenciesというeslint-config-airbnbのルールと衝突するため
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false
      }
    ],
    '@typescript-eslint/no-unused-vars': 'error',
    // DOC: https://eslint.org/docs/rules/lines-between-class-members
    // クラスの関数の間を改行
    'lines-between-class-members': 'off',
    // DOC: https://eslint.org/docs/rules/no-unused-expressions
    // 未使用の式を許可しない
    'no-unused-expressions': 'off',
    // DOC: https://eslint.org/docs/rules/no-underscore-dangle
    // アンダースコアを許可
    'no-underscore-dangle': 'off',
    // DOC: https://eslint.org/docs/rules/complexity
    // 循環的複雑度の制限(ネストの深さ)
    complexity: ['error', 10],
    // DOC: https://eslint.org/docs/rules/consistent-return
    // return時に常に値を指定
    'consistent-return': 'off',
    // DOC: https://eslint.org/docs/rules/no-duplicate-imports
    // 重複するインポートを許可しない
    'import/no-unresolved': 0,
    // DOC: https://eslint.org/docs/rules/no-plusplus
    // 単項演算子++と--を許可
    'no-plusplus': 'off',
    // https://eslint.org/docs/rules/comma-style
    // 末尾カンマ禁止
    'comma-style': ['error', 'last'],
    'comma-dangle': 0,
    // ===== セミコロンを禁止にする =====
    // https://eslint.org/docs/rules/semi
    // 文 (Statement) の末尾にセミコロンを書くか書かないかを一貫させるルールです。
    semi: ['error', 'never', { beforeStatementContinuationChars: 'never' }],
    // https://eslint.org/docs/rules/semi-spacing
    // セミコロン前後の空白を一貫させる
    'semi-spacing': ['error', { after: true, before: false }],
    // https://eslint.org/docs/rules/no-extra-semi
    // 余分なセミコロンを禁止する
    'no-extra-semi': 'error',
    // https://eslint.org/docs/rules/no-unexpected-multiline
    // 意図に反して2つの文が接続された箇所を警告するルールです
    'no-unexpected-multiline': 'error',
    // https://eslint.org/docs/rules/no-unreachable
    // 到達できない文を警告する
    'no-unreachable': 'error',
    // ==============================
    // https://eslint.org/docs/rules/no-useless-escape
    // エスケープの使用を許可。docでの</script>を許可するため
    'no-useless-escape': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        json: 'never',
        tsx: 'never',
        js: 'never',
        scss: 'never',
        css: 'never',
        ts: 'never'
      }
    ]
  },
  settings: {
    'import/extensions': ['.js', '.tsx', '.ts', '.json'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }]
  }
}
