module.exports = function(grunt) {
  //grunt.loadNpmTasks('grunt-imagemagick');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.initConfig({
    //resize images
    // // "imagemagick-hisrc":{
    // //   dev:{
    // //     files:"view/images/*.{gif,jpg,png}",
    // //     suffix:["-2x","-1x","-low"],
    // //   }
    // // },
    // "imagemagick-resize":{
    //   dev:{
    //     from:'views/images/',
    //     to:'views/images/',
    //     files:'pizzeria.jpg',
    //     props:{
    //       width:50
    //     }
    //   }
    // }
    // //,"imagemagick-convert":{
    // //   dev:{
    // //     args:['test/resizeme.jpg','-resize', '25x25', 'test/resized/resizeme-small.jpg']
    // //   }
    // // }

    //uglify main.js --> main.min.js
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      // options: {
      //   banner: '/*! <%= main.js %> <%= grunt.template.today("yyyy-mm-dd") %> */'
      // },
      build: {
        src: 'views/js/main.js',
        dest: 'views/js/main.min.js'
      }
    }

    
});

//grunt.registerTask('default', ['imagemagick-resize']);
grunt.registerTask('default', ['uglify']);
};