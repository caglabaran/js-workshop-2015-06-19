var assert = require("assert")
describe('SQL', function(){
  describe('select', function(){
    it('should return -1 when the value is not present 5', function(){
    	var sql_str_from_object = sql_obj.
				select().
				from("tablo").
				where({"isim": "Ahmet"}).
				build();
      assert.equal(sql_str_from_object, 'SELECT * FROM tablo WHERE isim = "Ahmet"');
    })
  })
})