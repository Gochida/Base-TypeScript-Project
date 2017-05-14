// Original source found here: https://www.typescriptlang.org/docs/handbook/gulp.html

// Use this Gulp file when creating code for use with Node.js
// I believe you only need tsconfig.json if you are using this particular gulp task.

var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("default", function() {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});