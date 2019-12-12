var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');

var tsProject = ts.createProject('tsconfig.json');
var tsProjectES6 = ts.createProject('tsconfig.json', {
    module: 'es6',
});

/*var tsProject = ts.createProject({
    target: 'es5',
    declaration: true,
    jsx: 'react',
    module: 'commonjs',
    isolatedModules: false,
    "moduleResolution": "node",
    lib: ['es6', 'dom']
});*/

gulp.task('default', function () {
    var tsResult = gulp.src(['src/main/**/*.ts', 'src/main/**/*.tsx'])
        .pipe(tsProject());

    return merge([
        tsResult.dts.pipe(gulp.dest('dist/commonjs')),
        tsResult.js.pipe(gulp.dest('dist/commonjs'))
    ]);
});

gulp.task('es', function () {
    var tsResult = gulp.src(['src/main/**/*.ts', 'src/main/**/*.tsx'])
        .pipe(tsProjectES6());

    return merge([
        tsResult.dts.pipe(gulp.dest('dist/es')),
        tsResult.js.pipe(gulp.dest('dist/es'))
    ]);
});


/* gulp.task('default', function () {
    var tsResult = gulp.src(['src/main//.ts', 'src/main//*.tsx'])
        .pipe(tsProject());

    return tsResult
        .pipe(gulp.dest('dist'));
});*/

/*gulp.task('default', function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest('dist'));
});*/
