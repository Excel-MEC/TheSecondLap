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
			files: ["src/layout/**/*.njk", "src/partials/**/*.njk"],
			tasks: ["renderNunjucks:index"],
			options: {
				spawn: false
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
	}
});
grunt.loadNpmTasks("grunt-contrib-watch");
grunt.loadNpmTasks("grunt-contrib-concat");
grunt.loadNpmTasks("grunt-contrib-connect");
grunt.loadNpmTasks("grunt-render-nunjucks");

grunt.registerTask("default", ["concat", "renderNunjucks", "connect", "watch"]);
