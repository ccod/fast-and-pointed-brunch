exports.config = {
    
  server: {
    path: 'server/server.js',
    port: 3333,
    base: '/',
    run: true
  },
    
  conventions: {
    assets: /^client\/assets\//,
    ignored: /^(bower_components\/bootstrap-less(-themes)?|client\/styles\/overrides)/
  },
    
  modules: {
    definition: false,
    wrapper: false
  },
    
  paths: {
    "public": '_public',
    watched: ['client', 'vendor']
  },
  
  files: {
    javascripts: {
      joinTo: {
        'js/app.js': /^client/,
        'js/vendor.js': /^(bower_components|vendor)/
      }
    },
    
    stylesheets: {
      joinTo: {
        'css/app.css': /^(client|vendor|bower_components)/
      },
      order: {
        before: ['client/styles/app.less']
      }
    },
    
    templates: {
      joinTo: {
        'js/dontUseMe': /^client/
      }
    }
  },
  
  plugins: {
    jade: {
      pretty: true
    },
    jade_angular: {
      modules_folder: 'partials',
      locals: {}
    }
  }
};
