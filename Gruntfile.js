module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: ['Gruntfile.js', 'specs/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }

    },
    
    protractor: {
        options: {
          keepAlive: true,
          configFile: "protractor.conf.js"
        },
        singlerun: {},
        qa1: {
            options: {
                configFile:'protractor.conf.js',
                debug: false,
                args: {
                    specs: [
                        './specs/tests/*.js'
                    ],
                }
            }
        },
        auto: {
          keepAlive: true,
          options: {
            args: {
              seleniumPort: 4444
            }
          }
        }
      },
      

      shell: {
          
          options: {
              
              stdout: true
          },
          
          protractor_install: {
              
              command: 'node ./node_modules/protractor/bin/webdriver-manager update'
          },
          
          npm_install:{
              
              command: 'npm install'
          }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-shell-spawn');

  
  grunt.registerTask('abc', ['jshint', 'protractor:singlerun']);
  grunt.registerTask('qa1', ['jshint', 'protractor:qa1' ]);
  grunt.registerTask('install', ['shell:npm_install', 'shell:protractor_install']);
};