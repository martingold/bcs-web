module.exports = function (grunt) {
    require('jit-grunt')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
        watch: {
            options: {
                livereload: true
            },
            html: {
                files: ['**/*.html'],
                livereload: true
            },
            js: {
                files: ['src/js/**/*.js'],
                tasks: ['uglify'],
                livereload: true
            },
            css: {
                files: ['src/**/*.scss'],
                tasks: ['sass:dist'],
                livereload: true
            },
            vendor: {
                files: ['bower_components/*'],
                tasks: ['sass:vendor'],
                livereload: true
            }
        },
        uglify: {
            default: {
                options: {
                    sourceMap: true,
                    compress: false
                },
                files: {
                    'www/dist/js/main.min.js': [
                        'bower_components/jquery/dist/jquery.min.js',
                        'src/js/main.js',
                        'src/js/components/*'
                    ]
                }
            }
        },
        sass: {
            dist: {
                options: {
                    sourceMap: true,
                    style: 'compressed'
                },
                files: {
                    'www/dist/css/main.css': 'src/css/main.scss'
                }
            },
            vendor: {
                options: {
                    sourceMap: true,
                    style: 'compressed'
                },
                files: {
                    'www/dist/css/vendor.css': 'src/css/vendor.scss'
                }
            }
        },
        autoprefixer: {
            dist: {
                files: {
                    'www/dist/css/main.css': 'www/dist/css/main.css',
                    'www/dist/css/vendor.css': 'www/dist/css/vendor.css'
                },
                options: {
                    map: true,
                    annotation: false
                }
            }
        },
        responsive_images: {
            feature: {
                options: {
                    engine: 'gm',
                    sizes: [{
                        width: 320,
                        height: 320
                    }]
                },
                files: [{
                    src: ['www/assets/images/source/feature/*.*'],
                    cwd: 'test/',
                    dest: 'www/assets/images/feature/'
                }]
            }
        }
    });


    grunt.registerTask('default', ['uglify', 'autoprefixer', 'sass:dist', 'sass:vendor', 'watch']);
};
