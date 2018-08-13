module.exports = function(grunt) {

	// Project configuration
	grunt.initConfig({

		postcss: {
			options: {
				processors: [
					require('precss')(), // allows use of Sass-like markup

					require('postcss-cachebuster')({cssPath: '/assets/css/src/'}), // cachebuster to local files based on their datechanged

					require('autoprefixer')({browsers: 'last 2 versions'}), // adds vendor prefixes using values from Can I Use

					require('cssnano')({safe:true}) // modular minifier
				]
			},
			dist: {
				expand: true,
				flatten: true,
				src: 'assets/css/src/*.css', // postcss runs on all css files here
				dest: 'assets/css/dest/' // output saved here
			}
		},

		watch: { // auto runs specified tasks when watched files are changed, added, deleted
			postcss: {
				files: ['assets/css/src/*.css'],
				tasks: ['postcss']
			}
		},

		browserSync: { // auto reloads proxy when changes are saved to src
		    dev: {
		        bsFiles: {
		            src : [
		            	'assets/css/dest/*.css',
		            	'assets/js/*.js',
		            	'view/layout/default.cfm'
		            ]

		        },
		        options: {
		        	watchTask: true,
		            proxy: '[LOCAL URL GOES HERE].local'
		        }
		    }
		} 
	});

	// Load plugins
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');

	// Default tasks
	grunt.registerTask('default', ['postcss']); // these tasks will run on $ grunt
	grunt.registerTask('start', ['browserSync','watch']); // these tasks will run on $ grunt start >> Ctrl/Cmd+C to stop
};