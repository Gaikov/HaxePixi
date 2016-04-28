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
var RenderToTexture = function() {
	this._matrix = new PIXI.Matrix();
	BaseExample.call(this);
	this._container = new PIXI.Container();
	this.get_stage().addChild(this._container);
	var _g = 0;
	while(_g < 5) {
		var j = _g++;
		var _g1 = 0;
		while(_g1 < 5) {
			var i = _g1++;
			var bunny = PIXI.Sprite.fromImage("_assets/basics/bunny.png");
			bunny.x = 30 * i;
			bunny.y = 30 * j;
			bunny.rotation = Math.random() * (Math.PI * 2);
			this._container.addChild(bunny);
		}
	}
	this._renderTexture = new PIXI.RenderTexture(this.get_renderer(),300,200,PIXI.SCALE_MODES.LINEAR,0.1);
	var sprite = new PIXI.Sprite(this._renderTexture);
	sprite.x = 450;
	sprite.y = 60;
	this.get_stage().addChild(sprite);
	this._container.x = 100;
	this._container.y = 60;
};
RenderToTexture.main = function() {
	new RenderToTexture();
};
RenderToTexture.__super__ = BaseExample;
RenderToTexture.prototype = $extend(BaseExample.prototype,{
	animate: function(deltaTime) {
		this._container.rotation += 6 * deltaTime;
		this._matrix.identity();
		this._matrix.rotate(this._container.rotation);
		this._matrix.translate(150,100);
		this._renderTexture.clear();
		this._renderTexture.render(this._container,this._matrix);
	}
});
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
RenderToTexture.main();
})(typeof console != "undefined" ? console : {log:function(){}});
