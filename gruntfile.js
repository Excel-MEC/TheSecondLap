const grunt = require("grunt");
grunt.initConfig({
	watch: {
		scripts: {
			files: ["src/js/**/*.js"],
			tasks: ["concat:js"],
			options: {
				spawn: false
			}
		},
		css: {
			files: ["src/css/**/*.css"],
			tasks: ["concat:css"],
			options: {
				spawn: false
			}
		},
		nuns: {
			files: ["src/sections/**/*.njk", "src/layout/**/*.njk"],
			tasks: ["renderNunjucks:index"],
			options: {
				spawn: true
			}
		},
		options: {
			livereload: true,
			host: "localhost",
			port: 3000
		}
	},
	concat: {
		css: {
			src: "src/css/**/*.css",
			dest: "src/assets/styles.css"
		},
		js: {
			src: "src/js/**/*.js",
			dest: "src/assets/scripts.js"
		}
	},
	connect: {
		server: {
			options: {
				port: 3000,
				hostname: "localhost",
				livereload: true,
				open: {
					target: "http://localhost:3000/src"
				}
			}
		}
	},
	renderNunjucks: {
		options: {
			data: "src/data.json"
		},
		index: {
			files: [
				{
					expand: true,
					cwd: "src/layout/",
					src: ["index.njk"],
					dest: "src/",
					ext: ".html"
				}
			]
		}
	},
	uglify: {
		build: {
			files: {
				"dist/assets/scripts.js": "src/assets/scripts.js"
			}
		}
	},
	cssmin: {
		build: {
			files: {
				"dist/assets/styles.css": "src/assets/styles.css"
			}
		}
	},
	copy: {
		statics: {
			expand: true,
			cwd: "src/",
			src: ["*.html", "*.png"],
			dest: "dist/",
			flatten: true,
			filter: "isFile"
		},
		images: {
			expand: true,
			cwd: "src/imgs",
			src: "*",
			dest: "dist/imgs",
			flatten: true,
			filter: "isFile"
		}
	}
});
grunt.loadNpmTasks("grunt-contrib-watch");
grunt.loadNpmTasks("grunt-contrib-concat");
grunt.loadNpmTasks("grunt-contrib-connect");
grunt.loadNpmTasks("grunt-render-nunjucks");
grunt.loadNpmTasks("grunt-available-tasks");
grunt.loadNpmTasks("grunt-contrib-uglify");
grunt.loadNpmTasks("grunt-contrib-cssmin");
grunt.loadNpmTasks("grunt-contrib-copy");
grunt.registerTask("serve", ["concat", "renderNunjucks", "connect", "watch"]);
grunt.registerTask("build", ["uglify:build", "cssmin:build", "copy"]);
