module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  testEnvironment: 'jsdom',
  testTimeout: 10000,
  // Allow /node_modules/ for CI testing
  "transformIgnorePatterns": [],
};
