;
(function(w, d, undefiend) {
	var _viewElement = null;
	var _defaultRoute = null;

	var jsMvc = function() {
		this._routeMap = {};
	}

	var RouteObj = function(c, r, t) {
		this.controller = c;
		this.route = r;
		this.template = t;

	}

	jsMvc.prototype.AddRoute = function(controller, route, template) {
		this._routeMap[route] = new RouteObj(controller, route, template);
	}

	jsMvc.prototype.Initialize = function() {
		var startMvcDelegate = startMvc.bind(this);
		_viewElement = d.querySelector('[view]');
		if (!_viewElement) return;
		_defaultRoute = this._routeMap[Object.getOwnPropertyNames(this._routeMap)[0]];
		w.onhashchange = startMvcDelegate;
		startMvcDelegate();
	}

	function startMvc() {
		var pageHash = w.location.hash.replace('#', ''),
			routeName = null,
			routeObj = null;
		routeName = pageHash.replace('/', '');
		routeObj = this._routeMap[routeName]

		if (!routeObj) routeObj = _defaultRoute;
		// console.log('routeObj,_viewElement,pageHash',routeObj,_viewElement,pageHash)
		loadTemplate(routeObj, _viewElement, pageHash);
	}

	function loadTemplate(routeObj, view) {
		var xmlhttp;
		if (window.XMLHttpRequest) {
			xmlhttp = new XMLHttpRequest();
		} else {
			xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
		}

		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				console.log('routeObj,view,xmlhttp.responseText', routeObj, view, xmlhttp.responseText)
				loadView(routeObj, view, xmlhttp.responseText);
			}
		}

		xmlhttp.open('GET', routeObj.template, true);
		xmlhttp.send();
	}

	function loadView(routeObject, viewElement, viewHtml) {
		var model = {};

		// 这个controller 等于   function HomeController(model) {
		//     model.Message = 'Hello World';
		// }

		routeObject.controller(model);

		// 经过上面的处理以后，model编程了  {Message:'Hello World'}

		viewHtml = replaceToken(viewHtml, model);
		viewElement.innerHTML = viewHtml;
	}

	function replaceToken(viewHtml, model) {
		var modelProps = Object.getOwnPropertyNames(model);
		modelProps.forEach(function(element, index, array) {
			viewHtml = viewHtml.replace('{{' + element + '}}', model[element]);
		});
		return viewHtml;
	}

	//attach the mvc object to the window
	w['jsMvc'] = new jsMvc();



})(window, document)