'use strict';

var expect = require('chai').expect;
var checker = require("../index.js");

describe('hasLowerCase', function() {
    it('should return false when presented with "1"', function() {
        var result = checker.hasLowerCase('1');
        expect(result).to.be.false;
    });
    it('should return false when presented with "A"', function() {
        var result = checker.hasLowerCase('A');
        expect(result).to.be.false;
    });
    it('should return false when presented with ""', function() {
        var result = checker.hasLowerCase('');
        expect(result).to.be.false;
    });
    it('should return true when presented with "a"', function() {
        var result = checker.hasLowerCase('a');
        expect(result).to.be.true;
    });
    it('should return true when presented with "Aa"', function() {
        var result = checker.hasLowerCase('Aa');
        expect(result).to.be.true;
    });
});
