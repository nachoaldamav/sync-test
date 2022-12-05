'use strict';

var expect = require('chai').expect;
var checker = require("../index.js");

describe('hasUpperCase', function() {
    it('should return false when presented with "1"', function() {
        var result = checker.hasUpperCase('1');
        expect(result).to.be.false;
    });
    it('should return true when presented with "A"', function() {
        var result = checker.hasUpperCase('A');
        expect(result).to.be.true;
    });
    it('should return false when presented with ""', function() {
        var result = checker.hasUpperCase('');
        expect(result).to.be.false;
    });
    it('should return false when presented with "a"', function() {
        var result = checker.hasUpperCase('a');
        expect(result).to.be.false;
    });
    it('should return true when presented with "Aa"', function() {
        var result = checker.hasUpperCase('Aa');
        expect(result).to.be.true;
    });
});
