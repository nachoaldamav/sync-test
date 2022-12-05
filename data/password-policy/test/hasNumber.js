'use strict';

var expect = require('chai').expect;
var checker = require("../index.js");

describe('hasNumber', function(){
    it('should return true when presented with "1"', function() {
        var result = checker.hasNumber('1');
        expect(result).to.be.true;
    });
    it('should return false when presented with "a"', function() {
        var result = checker.hasNumber('a');
        expect(result).to.be.false;
    });
    it('should return false when presented with ""', function() {
        var result = checker.hasNumber('');
        expect(result).to.be.false;
    });
    it('should return true when presented with "aBCd1"', function() {
        var result = checker.hasNumber('aBCd1');
        expect(result).to.be.true;
    });
    it('should return false when presented with "aBCd1" and 2', function() {
        var result = checker.hasNumber('aBCd1', 2);
        expect(result).to.be.false;
    });
    it('should return true when presented with "aBCd1aa1" and 1', function() {
        var result = checker.hasNumber('aBCd1aa1', 1);
        expect(result).to.be.true;
    });
    it('should return true when presented with "aBCd1aa1" and 2', function() {
        var result = checker.hasNumber('aBCd1aa1', 2);
        expect(result).to.be.true;
    });
})
