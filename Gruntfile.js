module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  
  grunt.config("browserify", {
    dist: {
      files: {
        'app/javascripts/index.js': ['app/javascripts/**/*.coffee', 'app/javascripts/**/*.js', 'vendor/javascripts/**/*.js'],
      },
      options: {
        transform: ['coffeeify']
      }
    }
  })
  
  grunt.config('cssmin', {
    combine: {
      files: {
        'app/stylesheets/app.min.css': [
          'app/stylesheets/**/*.css',
          'vendor/components/**/*bootstrap.css'
        ]
      }
    }
  });
  
  grunt.config('watch', {
    files: [
      'app/javascripts/**/*.js',
      'app/stylesheets/**/*.css',
      'views/slides/**/*.html',
      'views/layouts/**/*.html'
    ],
    tasks: ['default']
  });

  grunt.config('concat', {
    html: {
      src: ['views/slides/**/*.html'],
      dest: 'index.html',
      options: {
        banner: grunt.file.read('views/layouts/header.html'),
        footer: grunt.file.read('views/layouts/footer.html'),
        separator: "<!-- -->",
        preOrder: function () {
          var slideRegex = /.*slide\_(\d+)\.html/;
          this.sort(function (a, b) {
            var numOne = a.match(slideRegex)[1] | 0,
              numTwo = b.match(slideRegex)[1] | 0;
            return numOne - numTwo;
          });
          console.log(this)
          return this;
        }
      }
    }
  })

  grunt.registerTask('clean', 'remove compiled files', function(){
    grunt.file.delete('index.html');
    grunt.file.delete('app/javascripts/index.js');
    grunt.file.delete('app/stylesheets/app.min.css');
  });

  grunt.registerTask('default', 'clean and browserify', ['clean', 'browserify', 'cssmin', 'concat:html', 'watch']);
  grunt.registerTask('new', 'new slide', function(){
    var sourcemap = require('grunt-contrib-concat/tasks/lib/sourcemap').init(grunt);
    console.log(this.files)
  })

}
