// Copyright 2019, University of Colorado Boulder

/**
 * Validates that the passed in entry exists and returns that value if validation is successful.
 *
 * @author Denzell Barnett (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  const phetCore = require( 'PHET_CORE/phetCore' );

  /**
   * Checks if the value passed is defined
   *
   * @param {*} entry - value to be checked
   * @returns {*} Returns the passed in value
   */
  function required( entry ) {
    assert && assert( entry !== undefined, 'Required field is undefined.' );
    return entry;
  }

  phetCore.register( 'required', required );

  return required;
} );