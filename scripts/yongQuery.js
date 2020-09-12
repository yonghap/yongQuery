(function (win) {
	var global = win;
	var doc = this.document;

	var $ = function (params, context) {
		return new yongQuery(params, context);
	}
	var yongQuery = function(params, context) {
		var currentContext = doc;
		console.log(params);
		console.log(context);
		// 두번쨰 매개변수가 있을 때 노드타입을 판별
		if (context) {
			if (context.nodeType) {
				currentContext = context;
			} else {
				currentContext = doc.querySelector(context);
			}
		}
	}

	$.fn = yongQuery.prototype;

	global.$ = $;
})(window);

