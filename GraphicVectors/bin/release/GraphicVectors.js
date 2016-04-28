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
	this._renderer = PIXI.autoDetectRenderer(800,600,this.prepareRenderOptions());
	window.document.body.appendChild(this._renderer.view);
	window.requestAnimationFrame($bind(this,this.loop));
};
BaseExample.prototype = {
	prepareRenderOptions: function() {
		return { backgroundColor : 1087931};
	}
	,get_renderer: function() {
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
var GraphicVectors = function() {
	BaseExample.call(this);
	this.get_stage().interactive = true;
	var graphics = new PIXI.Graphics();
	graphics.beginFill(16724736);
	graphics.lineStyle(4,16767232,1);
	graphics.moveTo(50,50);
	graphics.lineTo(250,50);
	graphics.lineTo(100,100);
	graphics.lineTo(50,50);
	graphics.endFill();
	graphics.lineStyle(2,255,1);
	graphics.beginFill(16740363,1);
	graphics.drawRect(50,250,120,120);
	graphics.lineStyle(2,16711935,1);
	graphics.beginFill(16711867,0.25);
	graphics.drawRoundedRect(150,450,300,100,15);
	graphics.endFill();
	graphics.lineStyle(0);
	graphics.beginFill(16776971,0.5);
	graphics.drawCircle(470,90,60);
	graphics.endFill();
	this.get_stage().addChild(graphics);
};
GraphicVectors.main = function() {
	new GraphicVectors();
};
GraphicVectors.__super__ = BaseExample;
GraphicVectors.prototype = $extend(BaseExample.prototype,{
	prepareRenderOptions: function() {
		var opts = BaseExample.prototype.prepareRenderOptions.call(this);
		opts.backgroundColor = 0;
		opts.antialias = true;
		return opts;
	}
});
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
GraphicVectors.main();
})(typeof console != "undefined" ? console : {log:function(){}});
