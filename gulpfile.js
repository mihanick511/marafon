const gulp = require('gulp')//Gulp — используется выполнения часто используемых задач (например, минификации, тестирования, объединения файлов), написанный на языке программирования JavaScript.
const sass = require('gulp-sass')(require('sass'))//метаязык на основе CSS, предназначенный для увеличения уровня абстракции CSS-кода и упрощения файлов каскадных таблиц стилей.
const twig = require('gulp-twig')//Шаблонизатор — это инструмент, который позволяет проще писать разметку, делить её на компоненты и связывать с данными.
const browserSync = require('browser-sync')//Browser Sync упрощает веб-разработку за счёт запуска веб-сервера и его быстрой перезагрузки в реальном времени. У Browser Sync есть и другие возможности, такие как синхронизация действий на нескольких устройствах
const concat = require('gulp-concat')//Этот плагин gulp объединит все исходные файлы вместе с некоторой магией, так что он по-прежнему будет работать с requireдругими файлами. 
const babel = require('gulp-babel')//Babel - это транспайлер, который переписывает код современного стандарта Javascript (ES2015) на более поздний. Транспайлер - это программа, позволяющая менять исходный код одной программы на эквивалентный исходный код на другом языке. В случае с Babel, он переписывает современный Javascript на старый
const plumber = require('gulp-plumber')//Рассмотрим еще один замечательный плагин gulp-plumber, который предотвращает прерывание потока в случае какой-то ошибки. К сожалению, на Windows в этом плагине я не смогла вывести значки и звуки для оповещения.
gulp.task('sass',()=>
{
	return gulp.src('src/assets/scss/style.scss')
		.pipe(sass({includePaths: ['src/']}).on('error', sass.logError))
		.pipe(gulp.dest('pages'))
		.pipe(browserSync.reload({stream: true}))
})
let jsFiles =
[
	'src/assets/js/*.js',
 	'src/**/*.js'
]
gulp.task('scripts',()=>
{
	return gulp.src(jsFiles)
		.pipe(babel())
		.pipe(concat('main.min.js'))
		.pipe(gulp.dest('pages'))
		.pipe(browserSync.reload({stream: true}))
})
gulp.task('twig', ()=>
{
	return gulp.src('./src/*.twig')
		.pipe(plumber())
		.pipe(twig({base:'./src/'}))
		.pipe(gulp.dest('pages'))
		.pipe(browserSync.reload({stream: true}))
})
gulp.task('browser-sync',()=>
{
	browserSync({
		server: {baseDir: './pages/'},
		startPath: './index.html',
		serveStaticOptions: {extensions: ["html"] },
		ghostMode: {scroll: false },
		notify: false,
 	});
})
gulp.task('watch', ()=>
{
	gulp.watch(['scss/**/*.scss','src/**/*.scss'], gulp.parallel('sass'));
	gulp.watch('src/**/*.twig', gulp.parallel('twig'));
	gulp.watch(['src/**/*.js'], gulp.parallel('scripts'));
	gulp.watch('src/**/*.js', gulp.parallel(() =>
	{
		browserSync.reload();
	}));
})
gulp.task('default', gulp.parallel(() => process.env.NODE_ENV = 'development', 'watch', 'browser-sync', 'sass', 'scripts', 'twig',  () => console.log('dev start')));
