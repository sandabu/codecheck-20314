module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true
      },
      target: {
        files: [{
          "expand": true,
          "cwd": "es6/src/",
          "src": ["**/*.js"],
          "dest": "target/",
          "ext": ".js"
        }]
      },
      test: {
        files: [{
          "expand": true,
          "cwd": "es6/test/",
          "src": ["**/*.js"],
          "dest": "test/",
          "ext": ".js"
        }]
      }
    }
  });

  grunt.registerTask('default', ['babel']);
};
