// Copyright 2019, University of Colorado Boulder

/**
 * From wikipedia:
 *  > A physical constant, sometimes fundamental physical constant or universal constant, is a physical quantity that is
 *  > generally believed to be both universal in nature and have constant value in time. It is contrasted with a
 *  > mathematical constant, which has a fixed numerical value, but does not directly involve any physical
 *  > measurement.
 *
 * Here is a link to examples of these types of "uniersal constants"
 * https://cosmologist.info/teaching/Cosmology/Physical_constants.pdf
 *
 *
 * @author Michael Kauzmann (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  // modules
  var phetCore = require( 'PHET_CORE/phetCore' );

  var PhysicalConstants = {

    /**
     * Decided on by looking at the following sources:
     * https://en.wikipedia.org/wiki/Gravitational_constant
     * https://physics.nist.gov/cgi-bin/cuu/Value?bg
     * https://www.quora.com/What-is-the-value-of-gravitational-constant-G
     */
    GRAVITATIONAL_CONSTANT: 6.67408E-11 // m^3 kg^-1 s^-2
  };

  return phetCore.register( 'PhysicalConstants', PhysicalConstants );
} );
 