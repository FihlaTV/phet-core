// Copyright 2018-2019, University of Colorado Boulder

/**
 * Tests for Enumeration
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( require => {
  'use strict';

  // modules
  const Enumeration = require( 'PHET_CORE/Enumeration' );

  QUnit.module( 'Enumeration' );

  QUnit.test( 'Basic enumeration', function( assert ) {
    const CardinalDirection = Enumeration.byKeys( [ 'NORTH', 'SOUTH', 'EAST', 'WEST' ] );

    assert.equal( CardinalDirection.NORTH, 'NORTH', 'Equality for NORTH' );
    assert.equal( CardinalDirection.SOUTH, 'SOUTH', 'Equality for SOUTH' );
    assert.equal( CardinalDirection.EAST, 'EAST', 'Equality for EAST' );
    assert.equal( CardinalDirection.WEST, 'WEST', 'Equality for WEST' );

    assert.equal( CardinalDirection.includes( CardinalDirection.NORTH ), true, 'NORTH is in the enumeration' );
    assert.equal( CardinalDirection.includes( 'NORTH' ), false, 'Strings shouln\'t match' );
    assert.equal( CardinalDirection.includes( 'YORKSHIRE_TERRIER_WITH_THE_CANDLE_STICK_IN_THE_BALLROOM' ), false,
      'Not in the enumeration' );
    assert.equal( CardinalDirection.includes( { name: 'NORTH' } ), false, 'Should not be able to synthesize Enumeration values' );

    // Test toString
    const object = {};
    object[ CardinalDirection.NORTH ] = 'exit';
    assert.equal( object.NORTH, 'exit', 'toString should work seamlessly' );

    window.assert && assert.throws( function() {
      CardinalDirection.SOMETHING_AFTER_THE_FREEZE = 5;
    }, 'Should not be able to set things after initialization' );

    window.assert && assert.throws( function() {
      const x = Enumeration.byKeys( [ 'lowercase', 'should', 'fail' ] );
      assert.ok( !!x, 'fake assertion so x is used' );
    }, 'Enumeration should fail for lowercase values' );
  } );

  QUnit.test( 'Before freeze test', function( assert ) {
    const E = Enumeration.byKeys( [ 'A', 'B' ], {
      beforeFreeze: E => {
        E.opposite = e => {
          window.assert && window.assert( E.includes( e ) );
          return e === E.A ? E.B : E.A;
        };
      }
    } );

    assert.equal( E.A, 'A', 'Equality for A' );
    assert.equal( E.B, 'B', 'Equality for B' );
    assert.equal( E.opposite( E.A ), E.B, 'Custom function check 1' );
    assert.equal( E.opposite( E.B ), E.A, 'Custom function check 2' );

    window.assert && assert.throws( function() {
      E.SOMETHING_AFTER_THE_FREEZE = 5;
    }, 'Should not be able to set things after initialization' );
  } );

  QUnit.test( 'VALUES', function( assert ) {
    const People = Enumeration.byKeys( [ 'ALICE', 'BOB' ] );
    assert.ok( true, 'at least one assertion must run per test' );
    window.assert && assert.throws( () => {
      People.VALUES = 'something else';
    }, 'Setting values after initialization should throw an error.' );
  } );

  QUnit.test( 'Rich', function( assert ) {
    class Planet {
      constructor( order ) {
        this.order = order;
      }

      getText( name ) {
        return name + ' is a person from the ' + this.order + ' planet.';
      }
    }

    const Planets = Enumeration.byMap( {
      MARS: new Planet( 2 ),
      EARTH: new Planet( 3 )
    } );

    assert.ok( Planets.MARS.order === 2, 'mars order should match' );
    assert.ok( typeof Planets.EARTH.getText( 'bob' ) === 'string', 'should return a string' );
    window.assert && assert.throws( () => {
      Planets.MARS = 'hello'; // fails because enumeration values should not be reassignable
    } );

    window.assert && assert.throws( () => {
      Planets.MARS.name = 'not mars!'; // Should not be able to reassign enumeration value properties
    } );
  } );
} );
