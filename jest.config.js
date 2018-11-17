module.exports = {
  moduleFileExtensions: ["js", "jsx", "json", "vue"],
  transform: {
    "^.+\\.vue$": "vue-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "^.+\\.jsx?$": "babel-jest"
  },
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/$1",
    "^~~/(.*)$": "<rootDir>/$1"
  },
  snapshotSerializers: ["jest-serializer-vue"],
  testMatch: ["**/*.spec.(js|jsx|ts|tsx)"],
  testPathIgnorePatterns: ["<rootDir>/cypress/", "<rootDir>/node_modules/"],
  testURL: "http://localhost/"
}
