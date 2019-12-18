const gulp = require('gulp');
const clean = require('gulp-clean');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const tsify = require('tsify');
const ts = require('gulp-typescript');
const uglify = require('gulp-uglify');
const buffer = require('vinyl-buffer');
const sourcemaps = require('gulp-sourcemaps');
const merge = require('merge2');
const rename = require('gulp-rename');

const tsProjectCommonjs = ts.createProject('tsconfig.json', {
    module: 'commonjs'
});
const tsProjectES6 = ts.createProject('tsconfig.json', {
    module: 'es6',
});

gulp.task('buildCommonJS', function() {
    const tsResult = gulp.src(['src/main/**/*.ts', 'src/main/**/*.tsx'])
        .pipe(tsProjectCommonjs());

    return merge([
        tsResult.dts.pipe(gulp.dest('dist/commonjs')),
        tsResult.js.pipe(gulp.dest('dist/commonjs'))
    ]);
});

gulp.task('buildES', function() {
    const tsResult = gulp.src(['src/main/**/*.ts', 'src/main/**/*.tsx'])
        .pipe(tsProjectES6());

    return merge([
        tsResult.dts.pipe(gulp.dest('dist/es')),
        tsResult.js.pipe(gulp.dest('dist/es'))
    ]);
});

gulp.task('renameMJS', function() {
    return gulp.src("dist/es/**/*.js")
        .pipe(rename(function (path) {
            path.extname = ".mjs";
        }))
        .pipe(gulp.dest("dist/es"));
});

gulp.task('deleteJSFilesInESModule', function() {
    return gulp.src("dist/es/**/*.js", {read: false})
        .pipe(clean());
});

gulp.task('default', gulp.series(gulp.parallel('buildCommonJS', 'buildES'), 'renameMJS', 'deleteJSFilesInESModule'));

gulp.task('examples', function () {
return browserify({
    basedir: '.',
    debug: true,
    entries: ['src/examples/basic.tsx'],
    cache: {},
    packageCache: {}
})
    .plugin(tsify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('examples'));
});
