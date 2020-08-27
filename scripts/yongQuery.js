function yongQuery( selector, context ) {
	this.elements = new Set(document.querySelectorAll(selector));
	if ( window == this ) {
		return new yongQuery(selector, context);
	}
}

var $ = yongQuery;


yongQuery.fn = yongQuery.prototype = {
	version : '1.0',
	hasClass : function ( context ) {
		for (let item of this.elements) {
			if (item.classList.value.indexOf(context) >= 0) {
				console.log('t');
			} else {
				console.log('f');
			}
		}
	},
	addClass : function ( context ) {
		for (let item of this.elements) {
			if (item.classList.value.indexOf(context) > -1) {
			} else {
				item.classList.add(context);
			}
		}
	},
	removeClass : function ( context ) {
		for (let item of this.elements) {
			if (item.classList.value.indexOf(context) > -1) {
				item.classList.remove(context);
			} else {
			}
		}
	}
}

