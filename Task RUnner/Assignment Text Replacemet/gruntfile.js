module.exports = function(grunt) {
    
    grunt.initConfig({
        replace: {
            dist: {
              options: {
                patterns: [
                  {
                    match: /ninjacoding\.com/g,
                    replacement: 'codingninjas.com'
                  }
                ]
              },
              files: [
                {
                  expand: true, flatten: true, src: ['src/index.html'], dest: 'build/'
                }
              ]
            }
          }
    });


    //load tasks 
    grunt.loadNpmTasks('grunt-replace');

    //register Task 
    grunt.registerTask('default',['replace']);
}