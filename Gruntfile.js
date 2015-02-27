module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          optimization: 2
        },
        files: {
          "css/inputs.telefonica.css": "less/inputs.less",
          "css/inputs.movistar.css": "less/movistar.less",
          "css/inputs.o2.css": "less/o2.less",
          "css/inputs.vivo.css": "less/vivo.less"
        }
      },
      production: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "css/inputs.telefonica.min.css": "less/inputs.less",
          "css/inputs.movistar.min.css": "less/movistar.less",
          "css/inputs.o2.min.css": "less/o2.less",
          "css/inputs.vivo.min.css": "less/vivo.less"
        }
      }
    },

    watch: {
      styles: {
        files: ['less/**/*.less'],
        tasks: ['less', 'autoprefixer'],
        options: {
          nospawn: true
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 5 versions']
      },
      dist: {
        src: 'css/*.css'
      },
    },
  });

  grunt.registerTask('default', ['less','autoprefixer','watch']);
};
