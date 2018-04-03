const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");

// Compile Sass and inject into browswer
gulp.task("sass", function() {
    return gulp.src(["node_modules/bootstrap/scss/bootstrap.scss", "src/scss/*.scss"])
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});



// Move JS files to src/js
gulp.task("js", function() {
    return gulp.src(
        [
            "node_modules/bootstrap/dist/js/bootstrap.min.js", 
            "node_modules/jquery/dist/jquery.min.js", 
            "node_modules/popper.js/dist/umd/popper.min.js", 
            "node_modules/angular/angular.min.js", 
            "node_modules/angular-route/angular-route.min.js"
        ])
        .pipe(gulp.dest("src/js/vendors"))
        .pipe(browserSync.stream());
});




// Watch Sass & Serve
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./src"  
    });

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
    gulp.watch(["src/*.html", "src/partials/*.html", "src/js/*"]).on('change', browserSync.reload);
});



// Move font folder to src
gulp.task("fonts", function() {
    return gulp.src("node_modules/font-awesome/fonts/*")
        .pipe(gulp.dest("src/fonts"));
});

// Move font-awesome css to folder to src
gulp.task("fa", function() {
    return gulp.src("node_modules/font-awesome/css/font-awesome.min.css")
        .pipe(gulp.dest("src/css"));
});

gulp.task("default", ["js", "serve", "fa", "fonts"])
