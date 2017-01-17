module.exports = function(grunt) {
    // grunt.initConfig({
    //     cssnano: {
    //         options: {
    //             sourcemap: true
    //         },
    //         dist: {
    //             files: {
    //                 'views/css/style.nan.css': 'views/css/style.css',
    //                 'views/css/bootstrap-grid.nan.css': 'views/css/bootstrap-grid.css'
    //             }
    //         }
    //     },

    //     pkg: grunt.file.readJSON('package.json'),
    //     uglify: {
    //       options: {
    //         banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    //       },
    //       build: {
    //         src: 'views/js/main.js',
    //         dest: 'views/js/main.min.js'
    //       }
    //     },

    //     // responsive_image:{
    //     //   dev: {
    //     //     options: {
    //     //       size: [{
    //     //         quality: 10
    //     //       }]
    //     //     }
    //     //   },
    //     //   files:[{
    //     //     expand: true,
    //     //     src: ['*.{gif,jpg,png}'],
    //     //     cwd: "views/images/",
    //     //     dest: 'views/images/reduced/'
    //     //   }]
    //     // }
    // });
    // grunt.loadNpmTasks('grunt-cssnano');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-responsive-images');
    // grunt.registerTask('default', ['cssnano','uglify']);

    grunt.initConfig({
        responsive_image:{
          dev: {
            options: {
              size: [{
                quality: 10
              }]
            }
          },
          files:[{
            expand: true,
            src: ['*.jpg'],
            cwd: "views/images/",
            dest: 'views/images/reduced/'
          }]
        }
    });
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.registerTask('default',['responsive_image']);
};