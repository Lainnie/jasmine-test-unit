(function(module) {
    'use strict';

    module.exports = function(grunt) {

        grunt.initConfig({

            connect: {
                test: {
                    options: {
                        port: 9090,
                        onCreateServer: function() {
                            console.log('Server on');
                        }
                    }
                }
            },

            jasmine: {
                src: 'src/**/*.js',
                options: {
                    host: 'http://localhost:9090',
                    specs: 'specs/**/*spec.js',
                    keepRunner: true,
                    template: require('grunt-template-jasmine-requirejs'),
                    templateOptions: {
                        requireConfig: {
                            baseUrl: './'
                        }
                    }
                }
            }
        });

        grunt.loadNpmTasks('grunt-contrib-requirejs');
        grunt.loadNpmTasks('grunt-contrib-jasmine');
        grunt.loadNpmTasks('grunt-contrib-connect');
        grunt.registerTask('default', ['connect:test', 'jasmine']);
    };

})(module);
