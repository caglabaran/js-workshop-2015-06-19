var assert = require("assert")
var SQL = require('./sql/sql');

describe('SQL', function(){
  describe('select', function(){
    
    it('Single Where Condition', function(){
    	var sql_obj = new SQL();
    	var sql_str_from_object = sql_obj.
				select().
				from("tablo").
				columns(['id', 'isim', 'soyisim']).
				where({"isim": "Ahmet"}).
				build();
      assert.equal(sql_str_from_object, 'SELECT id, isim, soyisim FROM tablo WHERE isim = "Ahmet"');
    });

    it('Two Where Conditions', function(){
    	var sql_obj = new SQL();
    	var sql_str_from_object = sql_obj.
				select().
				from("tablo").
				columns(['id', 'isim', 'soyisim']).
				where({"isim": "Ahmet"}).
				where({"soyisim": "Mehmet"}).
				build();
      assert.equal(sql_str_from_object, 'SELECT id, isim, soyisim FROM tablo WHERE isim = "Ahmet" AND soyisim = "Mehmet"');
    });

  });
});