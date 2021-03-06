var gulp = require('gulp');
var clean = require('gulp-clean');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var mq4HoverShim = require('mq4-hover-shim');
var rimraf = require('rimraf').sync;
var browser = require('browser-sync');
var panini = require('panini');
var concat = require('gulp-concat');
var wait = require('gulp-wait')
var port = process.env.SERVER_PORT || 8080;
var nodepath =  'node_modules/';
var assetspath =  'assets/';

// Starts a BrowerSync instance
gulp.task('server', ['build'], function(){
    browser.init({server: './_site', port: port});
});

// Watch files for changes
gulp.task('watch', function() {
    gulp.watch('scss/**/*', ['compile-scss', browser.reload]);
    gulp.watch('sass/**/*', ['compile-sass', browser.reload]);
    gulp.watch('js/**/*', ['copy-js', browser.reload]);
    gulp.watch('images/**/*', ['copy-images', browser.reload]);
    gulp.watch('html/pages/**/*', ['compile-html']);
    gulp.watch(['html/{layouts,includes,helpers,data}/**/*'], ['compile-html:reset','compile-html']);
    gulp.watch(['./src/{layouts,partials,helpers,data}/**/*'], [panini.refresh]);
});

// Erases the dist folder
gulp.task('reset', function() {
    rimraf('bulma/*');
    rimraf('scss/*');
    rimraf('assets/css/*');
    rimraf('assets/fonts/*');
    rimraf('images/*');
});

// Erases the dist folder
gulp.task('clean', function() {
    rimraf('_site');
});

// Copy Bulma filed into Bulma development folder
gulp.task('setupBulma', function() {
    //Get Bulma from node modules
    gulp.src([nodepath + 'bulma/*.sass']).pipe(gulp.dest('bulma/'));
    gulp.src([nodepath + 'bulma/**/*.sass']).pipe(gulp.dest('bulma/'));
});

// Copy Bulma extensions Sass into Bulma development folder
gulp.task('extendBulma', function() {
    gulp.src([nodepath + 'bulma-extensions/bulma-divider/dist/bulma-divider.sass']).pipe(gulp.dest('bulma/sass/extensions/'));
    gulp.src([nodepath + 'bulma-extensions/bulma-steps/dist/bulma-steps.sass']).pipe(gulp.dest('bulma/sass/extensions/'));
});

// Copy assets
gulp.task('copy', function() {
    //Copy other external css assets
    gulp.src(['assets/css/*.css']).pipe(gulp.dest('_site/assets/css/'));
    gulp.src([nodepath + '@mdi/font/css/materialdesignicons.min.css']).pipe(gulp.dest('_site/assets/css/'));
    gulp.src([nodepath + 'dripicons/webfont/webfont.css']).pipe(gulp.dest('_site/assets/css/'));
    //Copy other external font assets
    gulp.src(['assets/fonts/*']).pipe(gulp.dest('_site/assets/fonts/'));
    gulp.src([nodepath + '@mdi/font/fonts/**/*']).pipe(gulp.dest('_site/assets/fonts/'));
    gulp.src([nodepath + 'dripicons/webfont/fonts/**/*']).pipe(gulp.dest('_site/assets/css/fonts/'));
    gulp.src([nodepath + 'slick-carousel/slick/fonts/**/*',]).pipe(gulp.dest('_site/assets/css/fonts/'));
    gulp.src([nodepath + 'slick-carousel/slick/ajax-loader.gif',]).pipe(gulp.dest('_site/assets/css/'));
    gulp.src([assetspath + 'img/**/*',]).pipe(gulp.dest('_site/assets/img/'));
    //Copy other external data assets
    gulp.src(['assets/data/**/*']).pipe(gulp.dest('_site/assets/data/'));
    //Particles js
    gulp.src(['assets/js/particles.min.js']).pipe(gulp.dest('_site/assets/js/'));
});

//Theme Sass variables
var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'compressed',
    includePaths: [nodepath + 'bulma/sass']
};

//Theme Scss variables
var scssOptions = {
    errLogToConsole: true,
    outputStyle: 'compressed',
    includePaths: ['./scss/partials']
};

// Compile Bulma Sass
gulp.task('compile-sass', function () {
    var processors = [
        mq4HoverShim.postprocessorFor({ hoverSelectorPrefix: '.is-true-hover ' }),
        autoprefixer({
            browsers: [
                "Chrome >= 45",
                "Firefox ESR",
                "Edge >= 12",
                "Explorer >= 10",
                "iOS >= 9",
                "Safari >= 9",
                "Android >= 4.4",
                "Opera >= 30"
            ]
        })//,
        //cssnano(),
    ];
    //Watch me get Sassy
    return gulp.src('./bulma/bulma.sass')
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./_site/assets/css/'));
});

// Compile Theme Scss
gulp.task('compile-scss', function () {
    var processors = [
        mq4HoverShim.postprocessorFor({ hoverSelectorPrefix: '.is-true-hover ' }),
        autoprefixer({
            browsers: [
                "Chrome >= 45",
                "Firefox ESR",
                "Edge >= 12",
                "Explorer >= 10",
                "iOS >= 9",
                "Safari >= 9",
                "Android >= 4.4",
                "Opera >= 30"
            ]
        })//,
        //cssnano(),
    ];
    //Watch me get Sassy
    return gulp.src('./scss/core.scss')
        .pipe(wait(500))
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./_site/assets/css/'));
});

// Compile Html
gulp.task('compile-html', function() {
    gulp.src('html/pages/**/*.html')
        .pipe(panini({
        root: 'html/pages/',
        layouts: 'html/layouts/',
        partials: 'html/includes/',
        helpers: 'html/helpers/',
        data: 'html/data/'
    }))
        .pipe(gulp.dest('_site'))
        .on('finish', browser.reload);
});

gulp.task('compile-html:reset', function(done) {
    panini.refresh();
    done();
});

// Compile css from node modules
gulp.task('compile-css', function() {
    return gulp.src([
        //nodepath + 'path/to/file.min.css',
        nodepath + 'emojionearea/dist/emojionearea.min.css',
        nodepath + 'webui-popover/dist/jquery.webui-popover.min.css',
        nodepath + 'easy-autocomplete/dist/easy-autocomplete.min.css',
        nodepath + 'slick-carousel/slick/slick.css',
        nodepath + 'slick-carousel/slick/slick-theme.css',
        nodepath + 'izitoast/dist/css/iziToast.min.css',
        nodepath + 'quill/dist/quill.core.css',
        nodepath + 'quill/dist/quill.bubble.css',
        nodepath + 'croppie/croppie.css',
        nodepath + 'plyr/dist/plyr.css',
        nodepath + 'dropzone/dist/min/dropzone.min.css',
        nodepath + 'cropperjs/dist/cropper.min.css',
        nodepath + 'hopscotch/dist/css/hopscotch.min.css',
        nodepath + 'glider-js/glider.min.css',
        //Other external css
        assetspath + 'css/tipuedrop.css',
        assetspath + 'css/jquery.fancybox.min.css',
        nodepath + 'modal-video/css/modal-video.min.css',
    ])
        .pipe(concat('app.css'))
        .pipe(gulp.dest('./_site/assets/css/'));
});

// Compile js from node modules
gulp.task('compile-js', function() {
    return gulp.src([
        nodepath + 'jquery/dist/jquery.min.js',
        nodepath + 'feather-icons/dist/feather.min.js',
        nodepath + 'vivid-icons/dist/vivid-icons.min.js',
        nodepath + 'slick-carousel/slick/slick.min.js',
        nodepath + 'emojionearea/dist/emojionearea.min.js',
        nodepath + 'webui-popover/dist/jquery.webui-popover.min.js',
        nodepath + 'easy-autocomplete/dist/jquery.easy-autocomplete.min.js',
        nodepath + 'dropzone/dist/min/dropzone.min.js',
        nodepath + '@fengyuanchen/datepicker/dist/datepicker.min.js',
        nodepath + 'izitoast/dist/js/iziToast.min.js',
        nodepath + 'quill/dist/quill.min.js',
        nodepath + 'croppie/croppie.min.js',
        nodepath + 'cropperjs/dist/cropper.min.js',
        nodepath + 'dropzone/dist/min/dropzone.min.js',
        nodepath + 'modal-video/js/jquery-modal-video.min.js',
        nodepath + 'plyr/dist/plyr.min.js',
        nodepath + 'hammerjs/hammer.min.js',
        nodepath + 'scrollreveal/dist/scrollreveal.min.js',
        nodepath + 'hopscotch/dist/js/hopscotch.min.js',
        nodepath + 'glider-js/glider.min.js',
        //Get external js assets
        assetspath + 'js/highlight.min.js',
        assetspath + 'js/tipuedrop.js',
        assetspath + 'js/jquery.fancybox.min.js',
        assetspath + 'js/ggtooltip.js',
    ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./_site/assets/js/'));
});

//Copy Theme js to production site
gulp.task('copy-js', function() {
    gulp.src('js/**/*.js')
        .pipe(gulp.dest('./_site/assets/js/'));
});

//Copy images to production site
gulp.task('copy-images', function() {
    gulp.src('images/**/*')
        .pipe(gulp.dest('./_site/assets/images/'));
});

gulp.task('init', ['setupBulma']);
gulp.task('build', ['clean','copy', 'compile-css', 'compile-js', 'copy-js', 'compile-sass', 'compile-scss', 'compile-html', 'copy-images']);
gulp.task('default', ['server', 'watch']);
