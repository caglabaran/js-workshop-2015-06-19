var _ = require('underscore');

function SQL(){
	this._command = null;
	this._table = null;
	this._str = null;
	this._columns = [];
	this._where = {};
}

SQL.prototype.command = function(command, opts){
	if(command === 'SELECT'){
		this._command = 'SELECT';
	}
}
SQL.prototype.select = function(){
	this.command('SELECT');
	return this;
};

SQL.prototype.build = function(){
	var where_str = '', where_keys = Object.keys(this._where);
	if(where_keys.length > 0){
		var where_statements = _.map(this._where, function(val, key){ return key + ' = "' + val + '"'; });
		where_str = 'WHERE ' + where_statements.join(' AND ');
	}

	var column_str = '*';
	if(this._columns.length > 0){
		column_str = this._columns.join(', ');
	}
	this._str = this._command + ' ' + column_str + ' FROM ' + this._table + ' ' + where_str;
	return this._str;
};

SQL.prototype.columns = function(cols){
	this._columns = this._columns.concat(cols);
	return this;
};

SQL.prototype.from = function(tableName){
	this._table = tableName;
	return this;
};

SQL.prototype.table = SQL.prototype.from;

SQL.prototype.where = function(constraints){
	var that = this;
	var keys = Object.keys(constraints);
	_.each(keys, function(key){
		that._where[key] = constraints[key];
	});
	return this;
};

module.exports = SQL;