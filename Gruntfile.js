module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: {
        src: [
          '**/.html',
          '**/*.js',
          // excluded files
          '!node_modules/**/*',
          '!vendor/**/*'
        ]
      },
      // http://www.jshint.com/docs/options/
      options: {
        browser: true,
        eqeqeq: true,
        extract: 'auto', // http://bahmutov.calepin.co/linting-javascript-inside-html.html
        forin: true,
        freeze: true,
        latedef: true,
        maxdepth: 4,
        maxparams: 3,
        maxstatements: 10,
        newcap: true
      }
    },
    validation: {
      options: {
        failHard: true,
        reset: true
      },
      files: {
        src: [
          '**/*.html',
          '!node_modules/**/*'
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-html-validation');

  grunt.registerTask('default', ['jshint', 'validation']);
};
