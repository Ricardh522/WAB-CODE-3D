module.exports = function(grunt) {

  // replace these with your own paths

  //var appDir = './WebAppBuilderForArcGIS/server/apps/1';

  var stemappDir = './WebAppBuilderForArcGIS/client/stemapp3d';

  grunt.initConfig({

    watch: {
      main: {
        files: ['src/**', 'tests/**'],
        tasks: ['jshint', 'sync'],
        options: {
          spawn: false
        }
      }
    },

    sync: {
      main: {
        files: [{
          cwd: 'src',
          src: ['**'],
          dest: appDir
        }, {
          cwd: 'src',
          src: ['**'],
          dest: stemappDir
        }],
        verbose: true // Display log messages when copying files
      }
    },

    browserSync: {

      bsFiles: {
        src: [
        '/src/widgets/**/*.js',
        '/src/widgets/**/*.html',
        '/src/widgets/**/*.css'
        ]
      },
      options: {
        ui: {
          port: 8080
        },
        server: {
           browser: "google chrome",
           directory: true,
           baseDir: './'
        },
        watchTask: true
      }
    },

    jshint : {
      options: {
        reporter: require('jshint-stylish'),
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        dojo: true
      },

      all: ['gruntfile.js', 'src/widgets/**/*.js', 'tests/**/*.js']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sync');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['sync', 'watch']);
  grunt.registerTask('serve', ['jshint', 'sync', 'browserSync', 'watch']);
};
