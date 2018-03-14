'use strict';
const gulp = require('gulp'),
    prefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    htmlmin = require('gulp-htmlmin'),
    cssmin = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    jpegtran = require('imagemin-jpegtran'),
    optipng = require('imagemin-optipng'),
    rimraf = require('rimraf'),
    browserSync = require("browser-sync"),
    debug = require('gulp-debug'),
    reload = browserSync.reload,
    newer = require('gulp-newer'),
    eol = require('gulp-line-ending-corrector'),
    webpack = require('webpack-stream');

const isDevelopment =  (process.env.NODE_ENV || 'development') == 'development';

var path = {
      build: {
        html: 'build/',
        js: 'build/js/',
        style: 'build/css/',
        img: 'build/img/',
        maps: '../maps/'
      },
      src: {
        html: 'src/**/*.html',
        js: 'src/js/app.js',
        style: 'src/style/*.{scss,sass}',
        img: 'src/img/**/*.{jpg,jpeg,png,gif,svg}',
        lib: 'src/lib/**/*.*'
      },
      watch: {
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/style/**/*.*',
        img: 'src/img/**/*.{jpg,jpeg,png,gif,svg}',
        lib: 'src/lib/**/*.*'
    },
    clean: './build'
};

var browserSyncConfig = {
    server: {
        baseDir: "./build"
    },
    host: 'localhost',
};

var htmlminConfig = {
    collapseBooleanAttributes: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    minifyCSS: true,
    minifyJS: true,
    preserveLineBreaks: true,
    processConditionalComments: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeStyleLinkTypeAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    ignoreCustomComments: [ /^!|^[/]?noindex/ ]
};

gulp.task( 'html:build', function() {
    return gulp.src(path.src.html, {since: gulp.lastRun('html:build')})
        .pipe(newer(path.build.html))
        .pipe(debug({title: 'src'}))
        .pipe(rigger())
        .pipe(htmlmin(htmlminConfig))
        .pipe(eol({eolc: 'CRLF',}))
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
});

gulp.task('js:build', function() {
    return gulp.src(path.src.js)
        .pipe(webpack({
            output: {
                filename: 'build.js',
            },
            devtool: isDevelopment ? 'source-map' : 'none',
        }))
        .pipe(eol({eolc: 'CRLF'}))
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
});

gulp.task('style:build', function() {
    return gulp.src(path.src.style)
        .pipe(debug({ title: 'src' }))
        .pipe(newer({
            dest: path.build.style,
            ext: '.css',
            extra: path.src.style.replace('/*.', '/**/*.')
        }))
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(prefixer())
        .pipe(cssmin())
        .pipe(sourcemaps.write(path.build.maps))
        .pipe(debug({title: 'dest'}))
        .pipe(eol({eolc: 'CRLF'}))
        .pipe(gulp.dest(path.build.style))
        .pipe(reload({stream: true}));
});

gulp.task('image:build', function() {
    return gulp.src(path.src.img, {since: gulp.lastRun('image:build')})
        .pipe(newer(path.build.img))
        .pipe(imagemin([
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.jpegtran({progressive: true}),
            imagemin.svgo({plugins: [{removeViewBox: true}, {cleanupIDs: false}]})
            ],
            {verbose: true}))
        .pipe(debug({title: 'imgmin'}))
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({stream: true}));
});

gulp.task('lib:build', function() {
    return gulp.src(path.src.lib)
        .pipe(newer({
          dest: path.build.html,
          map: function(relativePath) {
            if (relativePath.search(/.*(\.css)$/) !== -1) {
              return 'css/' + relativePath;
            } else if (relativePath.search(/.*(\.js)$/) !== -1) {
              return 'js/' + relativePath;
            }
            return 'lib/' + relativePath;
          }
        }))
        .pipe(debug())
        .pipe(gulp.dest(function(file) {
          return file.extname == '.js' ? path.build.js :
            file.extname == '.css' ? path.build.style : path.build.html + 'lib/';
        }));
});

gulp.task('build', gulp.series([
    'html:build',
    'js:build',
    'style:build',
    'lib:build',
    'image:build'
]));

gulp.task('watch', function(done){
    gulp.watch([path.watch.html], gulp.series('html:build'));
    gulp.watch([path.watch.style], gulp.series('style:build'));
    gulp.watch([path.watch.js], gulp.series('js:build'));
    gulp.watch([path.watch.img], gulp.series('image:build'));
    return done();
});

gulp.task('webserver', function webserver(done) {
    browserSync(browserSyncConfig);
    return done();
});

gulp.task('clean', function clean(cb) {
    rimraf(path.clean, cb);
});

gulp.task('default', gulp.series(['build', 'watch', 'webserver']));
