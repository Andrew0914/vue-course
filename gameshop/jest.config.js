module.exports = {
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/$1',
      '^~/(.*)$': '<rootDir>/$1',
      '^vue$': 'vue/dist/vue.common.js'
    },
    moduleFileExtensions: ['js', 'vue', 'json'],
    transform: {
      '^.+\\.js$': 'babel-jest',
      '.*\\.(vue)$': 'vue-jest',
      '\\.js$': '<rootDir>/node_modules/babel-jest'
    },
    snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue']
    //collectCoverage: true,
    //collectCoverageFrom: ['<rootDir>/src/components/**/*.vue']
  }
  