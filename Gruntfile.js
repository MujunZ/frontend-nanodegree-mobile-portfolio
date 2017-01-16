module.exports = function(grunt) {

// //var mozjpeg = require('imagemin-mozjpeg');
 
// grunt.initConfig({
//   imagemin: {                          // Task 
//     static: {                          // Target 
//       options: {                       // Target options 
//         optimizationLevel: 3,
//         svgoPlugins: [{ removeViewBox: false }]
//         //use: [mozjpeg()]
//       },
//       files: {                         // Dictionary of files 
//         'views/images/reduced/pizza.png': 'views/images/pizza.png', // 'destination': 'source' 
//         'views/images/reduced/pizzeria.jpg': 'views/images/pizzeria.jpg'
//       }
//     },
//   }
// });
 
// grunt.loadNpmTasks('grunt-contrib-imagemin');
// grunt.registerTask('default', ['imagemin']);

//grunt uglify
  //Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'views/js/main.js',
        dest: 'views/js/main.min.js'
      }
    }
  });


  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

  // //grunt cssmin
  //   grunt.initConfig({
  //      cssmin: {
  //       target: {
  //         files: [{
  //           expand: true,
  //           cwd: 'views/css',
  //           src: ['*.css', '!*.min.css'],
  //           dest: 'views/css',
  //           ext: '.min.css'
  //         }]
  //       }
  //     }
  //   });

  // grunt.loadNpmTasks('grunt-contrib-cssmin');
  // grunt.registerTask('default', ['grunt-contrib-cssmin']);

  //grunt cssnano
    //require('load-grunt-tasks')(grunt);
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
    //     }
    // });
    // grunt.loadNpmTasks('grunt-cssnano');
    // grunt.registerTask('default', ['cssnano']);
};