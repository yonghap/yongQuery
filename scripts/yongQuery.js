function yongQuery (a,c) {
	if (a && a.constructor == Function) {
		return yongQuery(document).ready(a);
		console.log('function Constructor');
	}
}

var $ = yongQuery;