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
const sass = require('gulp-sass');

const tsProjectCommonjs = ts.createProject('tsconfig.json', {
    module: 'commonjs'
});

gulp.task('buildCommonJS', function() {
    const tsResult = gulp.src(['src/main/**/*.ts', 'src/main/**/*.tsx'])
        .pipe(tsProjectCommonjs());

    return merge([
        tsResult.dts.pipe(gulp.dest('dist/commonjs')),
        tsResult.js.pipe(gulp.dest('dist/commonjs'))
    ]);
});

gulp.task('commonjs', function () {
    const tsResult = gulp.src(['src/main/**/*.ts', 'src/main/**/*.tsx'])
        .pipe(ts({
            typescript: typescript,
            module: 'commonjs',
            experimentalDecorators: true,
            emitDecoratorMetadata: true,
            declarationFiles: true,
            target: 'es5',
            noImplicitAny: true
        }));
});

gulp.task('sass', function () {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/css/'));
});

gulp.task('watch', function() {
    return gulp.watch('src/**/*', gulp.series('build'));
});

gulp.task('cleanDistFolder', function() {
    return gulp.src("dist/*", {read: false})
        .pipe(clean());
});

gulp.task('cleanTmpFolder', function() {
    return gulp.src("tmp/*", {read: false})
        .pipe(clean());
});

gulp.task('cleanBuiltFilesInSrcFolder', function() {
    return gulp.src(['src/**/*.js', 'src/**/*.d.ts'], {read: false})
        .pipe(clean());
});

gulp.task('clean', gulp.parallel('cleanDistFolder', 'cleanBuiltFilesInSrcFolder', 'cleanTmpFolder'));

gulp.task('default', gulp.series('watch'));

gulp.task('build', gulp.series(gulp.parallel('buildCommonJS'), 'sass'));

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

gulp.task('release', gulp.series('clean', gulp.parallel('build', 'examples')));
