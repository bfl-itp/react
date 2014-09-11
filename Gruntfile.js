module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: {
        src: [
          '**/*.js',
          '!node_modules/**/*'
        ]
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
