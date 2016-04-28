(function (console) { "use strict";
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var BaseExample = function() {
	this._stage = new PIXI.Container();
	this._prevTime = 0;
	this._renderer = PIXI.autoDetectRenderer(800,600,{ backgroundColor : 1087931});
	window.document.body.appendChild(this._renderer.view);
	window.requestAnimationFrame($bind(this,this.loop));
};
BaseExample.prototype = {
	get_stage: function() {
		return this._stage;
	}
	,animate: function(deltaTime) {
	}
	,loop: function(currentTime) {
		window.requestAnimationFrame($bind(this,this.loop));
		var deltaTime = (currentTime - this._prevTime) / 1000;
		this._prevTime = currentTime;
		this.animate(deltaTime);
		this._renderer.render(this._stage);
	}
};
var DisplayContainer = function() {
	BaseExample.call(this);
	var container = new PIXI.Container();
	this.get_stage().addChild(container);
	var _g = 0;
	while(_g < 5) {
		var j = _g++;
		var _g1 = 0;
		while(_g1 < 5) {
			var i = _g1++;
			var bunny = PIXI.Sprite.fromImage("_assets/basics/bunny.png");
			bunny.x = 40 * i;
			bunny.y = 40 * j;
			container.addChild(bunny);
		}
	}
	container.x = 100;
	container.y = 60;
};
DisplayContainer.main = function() {
	new DisplayContainer();
};
DisplayContainer.__super__ = BaseExample;
DisplayContainer.prototype = $extend(BaseExample.prototype,{
});
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
DisplayContainer.main();
})(typeof console != "undefined" ? console : {log:function(){}});
