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
	get_renderer: function() {
		return this._renderer;
	}
	,get_stage: function() {
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
var TextFields = function() {
	BaseExample.call(this);
	var basicText = new PIXI.Text("Basic text in pixi");
	basicText.x = 30;
	basicText.y = 90;
	this.get_stage().addChild(basicText);
	var style = { font : "bold italic 36px Arial", fill : "#F7EDCA", stroke : "#4a1850", strokeThickness : 5, dropShadow : true, dropShadowColor : "#000000", dropShadowAngle : Math.PI / 6, dropShadowDistance : 6, wordWrap : true, wordWrapWidth : 440};
	var richText = new PIXI.Text("Rich text with a lot of options and across multiple lines",style);
	richText.x = 30;
	richText.y = 180;
	richText.scale.x = 2;
	this.get_stage().addChild(richText);
};
TextFields.main = function() {
	new TextFields();
};
TextFields.__super__ = BaseExample;
TextFields.prototype = $extend(BaseExample.prototype,{
});
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
TextFields.main();
})(typeof console != "undefined" ? console : {log:function(){}});
