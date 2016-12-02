import * as Mocha from 'mocha';
import { expect } from 'chai';
import { suite, test, slow, timeout, skip, only } from "mocha-typescript";

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
        expect(2).to.equal(2);
    });
  });
});