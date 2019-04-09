module.exports = {
  name: 'source',
  displayName: 'source',
  rootDir: './../',
  testMatch: [
    '<rootDir>/src/form.test.js'
  ],
  setupFilesAfterEnv: [
    '<rootDir>/src/setupTests.js'
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "identity-obj-proxy"
  }
};