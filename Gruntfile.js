'use strict';
module.exports = function(grunt) {
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	var config = {};

	config['clean'] = {
		build: {
			files: [{
				dot: true,
				src: [
					'dist/*',
					'!dist/.git*'
				]
			}]
		}
	};

	config['htmlmin'] = {
		build: {
			options: {
				collapseBooleanAttributes: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeEmptyAttributes: true
			},
			files: {
				src: ['*.html'],
				dest: 'dist/',
				filter: {
					cwd: 'src/'
				}
			}
		}
	};

	config['useminPrepare'] = {
		options: {
			dest: 'dist'
		},
		html: 'src/index.html'
	}

	config['usemin'] = {
		options: {
			dirs: ['dist']
		},
		html: 'src/index.html'
	};

	config['rev'] = {
		files: {
			src: [
				'dist/scripts/{,*/}*.js',
			]
		}
	};

	grunt.initConfig(config);

	var tasks = [
		'clean',
		'useminPrepare',
		'htmlmin',
		'rev',
		'usemin'
	];

	grunt.registerTask('build', tasks);
}