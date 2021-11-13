/*
 * @Author: wjz
 * @Date: 2021-10-18 14:45:54
 * @LastEditors: wjz
 * @LastEditTime: 2021-10-26 17:26:47
 * @FilePath: /KMap-ts/gulpfile.js
 */
import gulp from 'gulp';
import jsdoc from 'gulp-jsdoc3';
import connect from 'gulp-connect';
import concat from 'gulp-concat'; //合并
import rename from 'gulp-rename'; //文件重命名
import uglify from 'gulp-uglify'; //压缩
import ts from 'gulp-typescript' //ts转义插件

import*as rollup from 'rollup';
// import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import rollupTypescript from 'rollup-plugin-typescript2';

var tsProject = ts.createProject('tsconfig.json') //根据配置文件初始化转义方法



//ts转义为es5并压缩
gulp.task('tsc',function(){
  return gulp.src('./src/konva/**')
    .pipe(tsProject())
    .pipe(concat({ path: 'KMap.js', newLine: ';'}))
    // .pipe(uglify()) //压缩文件
    // .pipe(rename({suffix:'.min'})) //重命名
    .pipe(gulp.dest('lib'))
})

//ts编译模块合并打包
gulp.task('build',function () {
  return rollup.rollup({
      input: `./src/index.ts`, //入口文件
      watch: {
        include: 'src/**',
      },
      plugins: [
        commonjs(), //将引入的js模块一起打包输出
        rollupTypescript({
          useTsconfigDeclarationDir: true,
          abortOnError: false,
          removeComments: false,
        })
      ],
    })
    .then(bundle => {
      return bundle.write({
        file: 'lib/KMap.js', //出口文件
        name: 'KMap', //名字
        format: 'umd',
        sourcemap: false,
      });
    });
});

//压缩文件
gulp.task('build-min',function(){
  return gulp.src('lib/KMap.js') //找到目标文件，读取文件
    .pipe(uglify()) //压缩文件
    .pipe(rename({suffix:'.min'})) //重命名
    .pipe(gulp.dest('lib/'))
})


//更新监视器
gulp.task('watch',function(){
  gulp.watch(['./src/*.ts'],['pre-build'])
})


//本地服务
gulp.task('server', function () {
  connect.server({
    root:"test/",
    livereload:true,
    port:5100
  });
});

gulp.task('api', function () {
  return gulp.src('./lib/KMap.js').pipe(
    jsdoc({
      opts: {
        destination: './api',
      },
    })
  );
});

//默认任务
gulp.task('default', gulp.parallel(['server']));
