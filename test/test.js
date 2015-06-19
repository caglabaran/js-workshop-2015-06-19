var assert = require("assert")
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present 5', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
    })
    it('should return -1 when the value is not prese 0', function(){
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
})