'use strict';

var expect = require('chai').expect;
var checker = require("../index.js");

describe('hasSpecialCharacter', function() {
    it('should return true when presented with "-"', function() {
        var result = checker.hasSpecialCharacter('-');
        expect(result).to.be.true;
    });
    it('should return false when presented with "a"', function() {
        var result = checker.hasSpecialCharacter('a');
        expect(result).to.be.false;
    });
    it('should return false when presented with "aAbB"', function() {
        var result = checker.hasSpecialCharacter('aAbB');
        expect(result).to.be.false;
    });
    it('should return true when presented with "*"', function() {
        var result = checker.hasSpecialCharacter('*');
        expect(result).to.be.true;
    });
    it('should return true when presented with "/"', function() {
        var result = checker.hasSpecialCharacter('/');
        expect(result).to.be.true;
    });
    it('should return true when presented with "_"', function() {
        var result = checker.hasSpecialCharacter('_');
        expect(result).to.be.true;
    });
    it('should return true when presented with "-"', function() {
        var result = checker.hasSpecialCharacter('-');
        expect(result).to.be.true;
    });
    it('should return true when presented with "|"', function() {
        var result = checker.hasSpecialCharacter('|');
        expect(result).to.be.true;
    });
    it('should return true when presented with "aAbB*"', function() {
        var result = checker.hasSpecialCharacter('aAbB*');
        expect(result).to.be.true;
    });
    it('should return false when presented with "aAbB*" and 2', function() {
        var result = checker.hasSpecialCharacter('aAbB*', 2);
        expect(result).to.be.false;
    });
    it('should return true when presented with "*aAbB*" and 2', function() {
        var result = checker.hasSpecialCharacter('*aAbB*', 2);
        expect(result).to.be.true;
    });
})
