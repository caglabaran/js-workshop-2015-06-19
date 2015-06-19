function SQL(){
	this._str = '';
}

SQL.prototype.current_string = function(command, opts){
	return this._str;
}

SQL.prototype.command = function(command, opts){
	if(command === 'SELECT'){
		this._str = 'SELECT';
	}
}
SQL.prototype.select = function(opts){
	return this.command('SELECT', opts);
};

module.exports = SQL;