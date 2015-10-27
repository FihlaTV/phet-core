// Copyright 2002-2014, University of Colorado Boulder

/**
 * Code for testing which platform is running.  Use sparingly, if at all!
 *
 * Sample usage:
 * if (platform.firefox) {node.renderer = 'canvas';}
 *
 * @author Sam Reid
 */
define( function( require ) {
  'use strict';

  var phetCore = require( 'PHET_CORE/phetCore' );

  var ua = navigator.userAgent;

  // Checks to see whether we are IE, and if so whether the version matches.
  function isIE( version ) {
    return getInternetExplorerVersion() === version;
  }

  //IE11 no longer reports MSIE in the user agent string, see https://github.com/phetsims/phet-core/issues/12
  //This code is adapted from http://stackoverflow.com/questions/17907445/how-to-detect-ie11
  function getInternetExplorerVersion() {
    var rv = -1;
    var re = null;
    if ( navigator.appName === 'Microsoft Internet Explorer' ) {
      re = new RegExp( 'MSIE ([0-9]{1,}[.0-9]{0,})' );
      if ( re.exec( ua ) !== null ) {
        rv = parseFloat( RegExp.$1 );
      }
    }
    else if ( navigator.appName === 'Netscape' ) {
      re = new RegExp( 'Trident/.*rv:([0-9]{1,}[.0-9]{0,})' );
      if ( re.exec( ua ) !== null ) {
        rv = parseFloat( RegExp.$1 );
      }
    }
    return rv;
  }

  phetCore.platform = {
    // Whether the browser is most likely Firefox
    firefox: ua.toLowerCase().indexOf( 'firefox' ) > -1,

    // Whether the browser is most likely Safari running on iOS
    // See http://stackoverflow.com/questions/3007480/determine-if-user-navigated-from-mobile-safari
    mobileSafari: !!( ua.match( /(iPod|iPhone|iPad)/ ) && ua.match( /AppleWebKit/ ) ),

    // Whether the browser is a matching version of Safari running on OS X
    safari5: !!( ua.match( /Version\/5\./ ) && ua.match( /Safari\// ) && ua.match( /AppleWebKit/ ) ),
    safari6: !!( ua.match( /Version\/6\./ ) && ua.match( /Safari\// ) && ua.match( /AppleWebKit/ ) ),
    safari7: !!( ua.match( /Version\/7\./ ) && ua.match( /Safari\// ) && ua.match( /AppleWebKit/ ) ),

    // Whether the browser is some type of IE (Internet Explorer)
    ie: getInternetExplorerVersion() !== -1,

    // Whether the browser is a specific version of IE (Internet Explorer)
    ie9: isIE( 9 ),
    ie10: isIE( 10 ),
    ie11: isIE( 11 ),

    // Whether the browser has Android in its user agent
    android: ua.indexOf( 'Android' ) > 0,

    // Whether the browser is Microsoft Edge
    edge: !!ua.match( /Edge\// ),

    // Whether the browser is Chromium-based (usually Chrome)
    chromium: (/chrom(e|ium)/).test( ua.toLowerCase() ) && !ua.match( /Edge\// )
  };

  return phetCore.platform;
} );