exports.config = {
    // See http://brunch.io/docs/getting-started for docs.
    files: {
        javascripts: {
            joinTo: 'app.js'

            // To use a separate vendor.js bundle, specify two files path
            // http://brunch.io/docs/config#-files-
            // joinTo: {
            //     "app.js": /^app/,
            //     "vendor.js": /^(?!app)/
            // }
            //
            // To change the order of concatenation of files
            // order: {
            //   before: [
            //     "vendor/js/jquery-x.x.x.js",
            //     "vendor/js/bootstrap.min.js"
            //   ]
            // }
        },
        stylesheets: {
            joinTo: 'app.css'
        },
        templates: {
            joinTo: 'app.js'
        }
    },

    // Django paths
    paths: {
        watched: [
            'app', 'test', 'vendor',  // Default directories
            'templates'  // Watch for changes to template files
            // Add any more template directories here. Examples:
            //'myapp/templates',
        ]
    },

    // Automatically require modules
    modules: {
        autoRequire: {
            // Uncomment the following line to automatically run javascript you write in 'app/main.js'
            //"app.js": ["main"]
        }
    }
};
