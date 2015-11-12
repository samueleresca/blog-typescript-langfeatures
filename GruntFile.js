module.exports = function (grunt) {
    //REQUIRED MODULES
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');
    //________________
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: './'
                }
            }
        },
        typescript: {
            base: {
                src: ['Scripts/**/*.ts'], //all *.ts files 
                dest: 'Scripts/compiled/main.js', //compiled inside main.js
                options: {
                    module: 'amd',
                    target: 'es5',
                    sourceMap:true
            }
            }
        },
        watch: {
            files: '**/*.ts', //watch all *.ts files    
            tasks: ['typescript'] // run the typescript task
        },
        open: {
            dev: {
                path: 'http://localhost:8080/index.html'
            }
        }
    });
    grunt.registerTask('default', ['connect', 'open', 'watch']);
}