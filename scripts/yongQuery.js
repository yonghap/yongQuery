(function (win) {
	var global = win;
	var doc = this.document;

	var yQ = function (params, context) {
		return new yongQuery(params, context);
	}

	var reg = /^\s*<(\w+|!)[^>]*>/;

	var yongQuery = function(params, context) {
		var currentContext = doc;
		// 두번쨰 매개변수가 있을 때 노드타입을 판별
		if (context) {
			if (context.nodeType) {
				currentContext = context;
			} else {
				currentContext = doc.querySelector(context);
			}
		}
		// 문자일 경우
		if (typeof params === 'string' && reg.test(params)) {
			var divElm = currentContext.createElement('div');
			divElm.className = 'hippo-doc-frag-wrapper';

			var docFrag = currentContext.createDocumentFragment();
			docFrag.appendChild(divElm);

			var queryDiv = docFrag.querySelector('div');
			queryDiv.innerHTML = params;

			var numberOfChildren = queryDiv.children.length;

			for (var z = 0; z < numberOfChildren; z++) {
				this[z] = queryDiv.children[z];
			}

			this.length = numberOfChildren;
			return this;
		}

		var nodes;
		if (typeof params !== 'string') {
			nodes = params;
		} else {
			nodes = currentContext.querySelectorAll(params.trim());
		}

		var nodeLength = nodes.length;
		for (var i = 0; i < nodeLength; i++) {
			this[i] = nodes[i]
		}
		this.length = nodeLength;
		return this;
	}


	yQ.fn = yongQuery.prototype;
	// each
	yQ.fn.each = function (callback) {
		var len = this.length; // node의 길이

		for (var i = 0; i < len; i++) {
			callback.call(this[i], i, this[i]);
		}
		return this;
	}
	// html
	yQ.fn.html = function(htmlString) {
		if (htmlString) {
			return this.each(function () {
				this.innerHTML = htmlString;
			})
		} else {
			return this[0].innerHTML;
		}
	}
	// text
	yQ.fn.text = function(textString) {
		if (textString) {
			return this.each(function () {
				this.textContent = textString;
			})
		} else {
			var t = '';
			this.each(function(i,item) {
				t += item.textContent;
			})
			return t;
		}
	}
	global.yQ = yQ;

})(window);

