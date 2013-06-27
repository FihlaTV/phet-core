// Copyright 2002-2013, University of Colorado Boulder

window.loadedPhetCoreConfig = true;

require.config( {
  deps: [ 'main' ],

  paths: {
    underscore: '../contrib/lodash.min-1.0.0-rc.3',
    PHET_CORE: '.'
  },
  
  // shim: {
  //   underscore: { exports: '_' }
  // },

  urlArgs: new Date().getTime() // add cache buster query string to make browser refresh actually reload everything
} );
