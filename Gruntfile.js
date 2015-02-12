module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    compass: {
      dist: {
        options: {
          sassDir: 'sass',
          cssDir: 'css',
          httpPath: '/',
          imagesDir: 'img',
          javascriptsDir: 'js',
          outputStyle: 'compressed'
        }
      }
    },
    uglify: {
      options: {
        mangle: true,
        compress: true
      },
      build: {
        src: ['js/*.js', '!js/*.min.js'],
        dest: 'js/main.min.js'
      }
    },
    watch: {
      scripts: {
        files: ['js/*.js', '!js/*min.js'],
        tasks: ['uglify'],
        options: {
          spawn:false
        },
      },
      css: {
        files: ['sass/*.scss'],
        tasks: ['compass'],
        options: {
          spawn:false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['compass', 'uglify']);
};
