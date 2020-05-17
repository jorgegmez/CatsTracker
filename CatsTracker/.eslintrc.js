module.exports = {
  root: true,
  env: {
    "react-native/react-native": true,
    "jest/globals": true
  },
  extends: [
    '@react-native-community',
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
    "plugin:prettier/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: [
      "./tsconfig.json"
    ],
    sourceType: "module"
  },
  plugins: [
    "@typescript-eslint",
    "jest",
    "react-native",
    "module-resolver",
    "import",
    "prettier"
  ],
  rules: {
    "react/jsx-filename-extension": 0,
    "spaced-comment": ["error", "always", { "markers": ["/"] }],
    "arrow-body-style" : 0,
    "react/prop-types": 0,
    "arrow-parens": [2, "as-needed"],
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "sort-imports": 0,
    "import/order":0,
    "react/display-name": 0,
    "default-case": 0,
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
   ],
   "react/destructuring-assignment": [2, "always", { "ignoreClassFields": true }],
   "react/state-in-constructor":0,
   "no-shadow": 0,
   "class-methods-use-this": 0,
   "import/prefer-default-export": 0,
   "react/sort-comp": [1, {
      "order": [
        "type-annotations",
        "static-methods",
        "static-variables",
        "instance-variables",
        "lifecycle",
        "/^on.+$/",
        "everything-else",
        "render"
      ]
    }],
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          ".storybook/**",
          "stories/**",
          "__stories__",
          "**/__stories__/**",
          "**/__tests__/**"
        ]
      }
    ]
  },
  settings: {
    "import/extensions": [".js",".jsx",".ts",".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".js",".jsx",".ts",".tsx"]
     },
     "import/resolver": {
       "babel-module": [".js",".jsx",".ts",".tsx"]
     },
     react: {
      version: "detect"
     }
  }
};
