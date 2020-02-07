/**
 * Gulp file for building WordPress Plugin Boilerplate
 *
 * This file contains all the gulp tasks that need to run
 * to build the WordPress Plugin Boilerplate stylesheets and javascripts.
 * This file was created for the Gulp version: 4.0.2
 *
 * Copyright 2019 © Your Name or Your Company
 *
 * @since 1.0.0
 */
const gulp = require( 'gulp' ); // https://www.npmjs.com/package/gulp
const sass = require( 'gulp-sass' ); // https://www.npmjs.com/package/gulp-sass
const autoprefixer = require( 'gulp-autoprefixer' ); // https://www.npmjs.com/package/gulp-autoprefixer
const cleancss = require( 'gulp-clean-css' ); // https://www.npmjs.com/package/gulp-clean-css
const rename = require( 'gulp-rename' ); // https://www.npmjs.org/package/gulp-rename
const babel = require( 'gulp-babel' ); // https://www.npmjs.com/package/gulp-babel
const uglify = require( 'gulp-uglify' ); // https://www.npmjs.com/package/gulp-uglify
const sourcemaps = require( 'gulp-sourcemaps' ); // https://www.npmjs.com/package/gulp-sourcemaps
const clean = require( 'gulp-clean' ); // https://www.npmjs.com/package/gulp-clean

const dest = 'dest';

/**
 * GULP Task: prodCompileSassAdmin
 *
 * Compiles the sass files for the admin facing
 * functionality of the plugin.
 *
 * @since 1.0.0
 */
function prodCompileSassAdmin () {
    return gulp.src( 'Admin/scss/**/*.scss' )
    .pipe( sass( { style: 'compressed' } ) )
    .pipe( gulp.dest( `${ dest }/Admin/css` ) );
}

/**
 * GULP Task: prodCompileSassPublic
 *
 * Compiles the sass files for the public facing
 * functionality of the plugin.
 *
 * @since 1.0.0
 */
function prodCompileSassPublic () {
    return gulp.src( 'Public/scss/**/*.scss' )
    .pipe( sass( { style: 'compressed' } ) )
    .pipe( gulp.dest( `${ dest }/Public/css` ) );
}

/**
 * GULP Task: prodAutoPrefixCssAdmin
 *
 * Auto prefixes the css files for the admin facing
 * functionality of the plugin.
 *
 * @since 1.0.0
 */
function prodAutoPrefixCssAdmin () {
    return gulp.src( `${ dest }/Admin/css/**/*.css` )
    .pipe( autoprefixer( 'last 3 version', 'safari 5', 'ie 8', 'ie 9' ) )
    .pipe( gulp.dest( `${ dest }/Admin/css` ) );
}

/**
 * GULP Task: prodAutoPrefixCssPublic
 *
 * Auto prefixes the css files for the public facing
 * functionality of the plugin.
 *
 * @since 1.0.0
 */
function prodAutoPrefixCssPublic () {
    return gulp.src( `${ dest }/Public/css/**/*.css` )
    .pipe( autoprefixer( 'last 3 version', 'safari 5', 'ie 8', 'ie 9' ) )
    .pipe( gulp.dest( `${ dest }/Public/css` ) );
}

/**
 * GULP Task: prodMinifyCssAdmin
 *
 * Creates minified versions of the css files for the admin facing
 * functionality of the plugin.
 *
 * @since 1.0.0
 */
function prodMinifyCssAdmin () {
    return gulp.src( [`${ dest }/Admin/css/**/*.css`, `!${ dest }/Admin/css/**/*.min.css`] )
    .pipe( rename( { suffix: '.min' } ) )
    .pipe( cleancss() )
    .pipe( gulp.dest( `${ dest }/Admin/css` ) );
}

/**
 * GULP Task: prodMinifyCssPublic
 *
 * Creates minified versions of the css files for the public facing
 * functionality of the plugin.
 *
 * @since 1.0.0
 */
function prodMinifyCssPublic () {
    return gulp.src( [`${ dest }/Public/css/**/*.css`, `!${ dest }/Public/css/**/*.min.css`] )
    .pipe( rename( { suffix: '.min' } ) )
    .pipe( cleancss() )
    .pipe( gulp.dest( `${ dest }/Public/css` ) );
}

/**
 * GULP Task: prodCompileJsAdmin
 *
 * Compiles the js files for the admin facing
 * functionality of the plugin, using babel.
 *
 * @since 1.0.0
 */
function prodCompileJsAdmin () {
    return gulp.src( 'Admin/js/**/*.js' )
    .pipe( babel( {
        presets: ['@babel/env'],
        compact: true
    } ) )
    .pipe( gulp.dest( `${ dest }/Admin/js` ) );
}

/**
 * GULP Task: prodCompileJsPublic
 *
 * Compiles the js files for the public facing
 * functionality of the plugin, using babel.
 *
 * @since 1.0.0
 */
function prodCompileJsPublic () {
    return gulp.src( 'Public/js/**/*.js' )
    .pipe( sourcemaps.init() )
    .pipe( babel( {
        presets: ['@babel/env'],
        compact: true
    } ) )
    .pipe( sourcemaps.write( './' ) )
    .pipe( gulp.dest( `${ dest }/Public/js` ) );
}

/**
 * GULP Task: prodMinifyJsAdmin
 *
 * Creates minified versions of the javascript files
 * for the admin facing functionality of the plugin
 *
 * @since 1.0.0
 */
function prodMinifyJsAdmin () {
    return gulp.src( [`${ dest }/Admin/js/**/*.js`, `!${ dest }/Admin/js/**/*.min.js`] )
    .pipe( rename( { suffix: '.min' } ) )
    .pipe( uglify() )
    .pipe( gulp.dest( `${ dest }/Admin/js` ) );
}

/**
 * GULP Task: prodMinifyJsPublic
 *
 * Creates minified versions of the javascript files
 * for the public facing functionality of the plugin
 *
 * @since 1.0.0
 */
function prodMinifyJsPublic () {
    return gulp.src( [`${ dest }/Public/js/**/*.js`, `!${ dest }/Public/js/**/*.min.js`] )
    .pipe( rename( { suffix: '.min' } ) )
    .pipe( uglify() )
    .pipe( gulp.dest( `${ dest }/Public/js` ) );
}

/**
 * GULP Task: prodCopy
 *
 * Copies all static files which doesn't need to
 * get built, into the destination directory.
 *
 * @since 1.0.0
 */
function prodCopy () {
    return gulp.src( [
        '**/**/*',
        
        `!${ dest }`,
        `!${ dest }/**/*`,
        
        '!node_modules',
        '!node_modules/**/*',
        
        '!Admin/scss',
        '!Admin/scss/**/*',
        
        '!Admin/css/**',
        '!Admin/css/**/*',
        
        '!Admin/js',
        '!Admin/js/**/*',
        
        '!Public/scss',
        '!Public/scss/**/*',
        
        '!Public/css',
        '!Public/css/**/*',
        
        '!Public/js',
        '!Public/js/**/*',
        
        '!.git',
        '!.git/**/*',
        
        '!.idea',
        '!.idea/**/*',
        
        '!composer.json',
        '!composer.lock',
        
        '!package.json',
        '!package-lock.json',
        
        '!gulpfile.js'
    ] )
    .pipe( gulp.dest( dest ) );
}

/**
 * GULP Task: prodClearDestDir
 *
 * Deletes the entire destination directory including
 * all the contents within it.
 *
 * @since 1.0.0
 */
function prodClearDestDir () {
    return gulp.src( dest, { read: false, allowEmpty: true } )
    .pipe( clean() );
}

/**
 * GULP Task: devCompileSassAdmin
 *
 * Compiles the sass files for the admin facing
 * functionality of the plugin.
 *
 * @since 1.0.0
 */
function devCompileSassAdmin () {
    return gulp.src( ['Admin/scss/*.*'] )
    .pipe( sass( { style: 'expanded' } ) )
    .pipe( autoprefixer( 'last 3 version', 'safari 5', 'ie 8', 'ie 9' ) )
    .pipe( gulp.dest( 'Admin/css' ) )
    .pipe( rename( { suffix: '.min' } ) )
    .pipe( cleancss() )
    .pipe( gulp.dest( 'Admin/css' ) );
}

/**
 * GULP Task: devCompileSassPublic
 *
 * Compiles the sass files for the public facing
 * functionality of the plugin.
 *
 * @since 1.0.0
 */
function devCompileSassPublic () {
    return gulp.src( ['Public/scss/*.*'] )
    .pipe( sass( { style: 'expanded' } ) )
    .pipe( autoprefixer( 'last 3 version', 'safari 5', 'ie 8', 'ie 9' ) )
    .pipe( gulp.dest( 'Public/css' ) )
    .pipe( rename( { suffix: '.min' } ) )
    .pipe( cleancss() )
    .pipe( gulp.dest( 'Public/css' ) );
}

/**
 * GULP Task: build
 *
 * Build the stylesheet and javascript files for the
 * admin and public specific functionality
 * of the plugin.
 *
 * @since 1.0.0
 */
const prodBuild = gulp.series(
    prodClearDestDir,
    prodCopy,
    
    gulp.parallel(
        prodCompileSassAdmin,
        prodCompileSassPublic
    ),
    
    gulp.parallel(
        prodAutoPrefixCssAdmin,
        prodAutoPrefixCssPublic
    ),
    
    gulp.parallel(
        prodMinifyCssAdmin,
        prodMinifyCssPublic
    ),
    
    gulp.parallel(
        prodCompileJsAdmin,
        prodCompileJsPublic
    ),
    
    gulp.parallel(
        prodMinifyJsAdmin,
        prodMinifyJsPublic
    )
);

const devBuild = gulp.series( devCompileSassAdmin, devCompileSassPublic );

/**
 * GULP Task: watch
 *
 * Watch the stylesheet and javascript files for the admin, public
 * and elementor specific functionality of the plugin. And trigger
 * the corresponding gulp tasks on changes of this files.
 *
 * @since 1.0.0
 */
function watch () {
    
    devBuild();
    
    gulp.watch( ['Admin/scss/*.*'], devCompileSassAdmin );
    gulp.watch( ['Public/scss/*.*'], devCompileSassPublic );
    
}

/**
 * GULP Exports
 *
 * Export the functions for direct usage through the CLI.
 *
 * @since 1.0.0
 */

// Admin facing functionality of the plugin
exports.prodCompileSassAdmin = prodCompileSassAdmin;
exports.prodAutoPrefixCssAdmin = prodAutoPrefixCssAdmin;
exports.prodMinifyCssAdmin = prodMinifyCssAdmin;
exports.prodCompileJsAdmin = prodCompileJsAdmin;
exports.prodMinifyJsAdmin = prodMinifyJsAdmin;
exports.devCompileSassAdmin = devCompileSassAdmin;

// Public facing functionality of the plugin
exports.prodCompileSassPublic = prodCompileSassPublic;
exports.prodAutoPrefixCssPublic = prodAutoPrefixCssPublic;
exports.prodMinifyCssPublic = prodMinifyCssPublic;
exports.prodCompileJsPublic = prodCompileJsPublic;
exports.prodMinifyJsPublic = prodMinifyJsPublic;
exports.devCompileSassPublic = devCompileSassPublic;

// Other tasks executable over this gulp file
exports.prodClearDestDir = prodClearDestDir;
exports.prodBuild = prodBuild;
exports.prodCopy = prodCopy;
exports.watch = watch;

exports.default = devBuild;