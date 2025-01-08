import gulp from 'gulp';
import concat from 'gulp-concat';

gulp.task('default',()=>{
    return gulp.src(['src/files/*.js','src/files/*.json','src/files/*.css','src/files/*.html'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dest/files'));
})



// module.exports = function(grunt) {

//     grunt.initConfig({

//         concat: {
//             options: {
//               separator: 'nextFile',
//             },
//             dist: {
//               src: ['src/files/*.js','src/files/*.json','src/files/*.css','src/files/*.html'],
//               dest: 'dest/files/all.js',
//             },
//           }
//     });

//     //load tasks 
//     //register task k
    
// };