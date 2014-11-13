module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        jshint: {
            files: [
                'Gruntfile.js', 'src/**/*.js', 'test/**/*.js',
                'lib/**/*.js',
                'lib/**/*.json',
                'bin/**/*.js',
                'bin/**/*.json',
                'routes/**/*.js',
                'routes/**/*.json'
            ],
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
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint', 'qunit']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jshint']);

};