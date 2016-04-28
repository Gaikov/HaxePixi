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
var Click = function() {
	BaseExample.call(this);
	this._sprite = PIXI.Sprite.fromImage("_assets/basics/bunny.png");
	this._sprite.position.set(230,264);
	this._sprite.interactive = true;
	this._sprite.on("mousedown",$bind(this,this.onDown));
	this._sprite.on("touchstart",$bind(this,this.onDown));
	this.get_stage().addChild(this._sprite);
};
Click.main = function() {
	new Click();
};
Click.__super__ = BaseExample;
Click.prototype = $extend(BaseExample.prototype,{
	onDown: function(eventData) {
		this._sprite.scale.x += 0.3;
		this._sprite.scale.y += 0.3;
	}
});
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
Click.main();
})(typeof console != "undefined" ? console : {log:function(){}});
