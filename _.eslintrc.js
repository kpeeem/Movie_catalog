module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "jsx-no-bind": [true, {
        "ignoreRefs": true,
        "allowArrowFunctions": true,
        "allowBind": true
    }],
    "react/jsx-filename-extension": [1, {"extensions": [".js", ".jsx"]}],
    "parser": "babel-eslint",
    "rules": {
        "strict": 0
    }
};