const gulp = require("gulp");

// All-purpose plug-ins
const concat = require("gulp-concat"); // Joins files together
const uglify = require("gulp-uglify"); // Removing new line characters and white space
const livereload = require("gulp-livereload"); // Reloads html on changes
const plumber = require("gulp-plumber"); // Error handling for Gulp tasks
const sourcemaps = require("gulp-sourcemaps"); // Identifies root files instead of concatenated file

// Sass plug-ins
const autoprefixer = require("gulp-autoprefixer"); // Browser compatibility
const bourbon = require("bourbon").includePaths;
const neat = require("bourbon-neat").includePaths;
const sass = require("gulp-sass");

// Delete plug-in
const del = require("del"); // Deletes dist file anytime tasks are run to keep file structure clean

// Image Compression
const imagemin = require("gulp-imagemin");
const imageminPNGquant = require("imagemin-pngquant");
const imageminJPEGRecompress = require("imagemin-jpeg-recompress");

// Packaging plug-in
const zip = require("gulp-zip");

// File Paths
const DIST_PATH = "client/dist";
const SCRIPTS_PATH = "client/scripts/**/*.js";
const SASS_PATH = "client/scss/**/*.scss";
const IMAGES_PATH = "client/images/**/*.{png,jpeg,jpg}";

// Sass task
gulp.task("styles", () => {
	console.log("Styles task starting.");
	return gulp
		.src(SASS_PATH)
		.pipe(
			plumber(error => {
				console.log("Styles task error.");
				console.log(error);
				this.emit("end");
			})
		)
		.pipe(sourcemaps.init())
		.pipe(
			sass({
				includePaths: [bourbon, neat]
			})
		)
		.pipe(
			autoprefixer({
				browsers: ["last 2 versions", "ie 8"]
			})
		)
		.pipe(
			sass({
				outputStyle: "compressed"
			})
		)
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(DIST_PATH))
		.pipe(livereload());
});

// Scripts task
gulp.task("scripts", () => {
	console.log("Scripts task starting.");
	return gulp
		.src(SCRIPTS_PATH)
		.pipe(
			plumber(error => {
				console.log("Encountered scripts task error!");
				console.log(error);
				this.emit("end");
			})
		)
		.pipe(sourcemaps.init())
		.pipe(uglify())
		.pipe(concat("script.js"))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(DIST_PATH))
		.pipe(livereload());
});

// Images task
gulp.task("images", () => {
	return gulp
		.src(IMAGES_PATH)
		.pipe(imagemin([imagemin.jpegtran(), imagemin.optipng(), imageminPNGquant(), imageminJPEGRecompress()]))
		.pipe(gulp.dest(DIST_PATH + "/images"));
});

// Clean task
gulp.task("clean", () => {
	console.log("Starting delete task.");
	return del.sync([DIST_PATH]);
});

// Default task
gulp.task("default", ["clean", "images", "styles", "scripts"], () => {
	console.log("Default task starting.");
});

// Export task
gulp.task("export", () => {
	return gulp
		.src("client/**/*")
		.pipe(zip("production.zip"))
		.pipe(gulp.dest("./"));
});

// Watch task
gulp.task("watch", ["default"], () => {
	console.log("Watch task starting.");
	require("./server.js");
	livereload.listen();
	gulp.watch(SCRIPTS_PATH, ["scripts"]);
	gulp.watch(SASS_PATH, ["styles"]);
});
