// yongQuery 함수

function yongQuery(a,c) {
	console.log(a);
	if (window == this) {
		return new yongQuery(a, c);
	}
}


// fn, prototype 선언
yongQuery.fn = yongQuery.prototype = {
	version : '1.0',
	size : function() {
		return this.length;
	}
}


yongQuery.extend = yongQuery.fn.extend = function (obj,prop) {
	if ( !prop ) { prop = obj; obj = this; }
	for ( var i in prop ) obj[i] = prop[i];
	return obj;
}

yongQuery.extend({
	ttt : function () {
		yongQuery.size();
	}
})


var $ = yongQuery;