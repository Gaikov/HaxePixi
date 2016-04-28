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
var VideoTexture = function() {
	BaseExample.call(this);
	var texture = PIXI.Texture.fromVideoUrl("_assets/testVideo.mp4");
	var videoSprite = new PIXI.Sprite(texture);
	videoSprite.width = this.get_renderer().width;
	videoSprite.height = this.get_renderer().height;
	this.get_stage().addChild(videoSprite);
};
VideoTexture.main = function() {
	new VideoTexture();
};
VideoTexture.__super__ = BaseExample;
VideoTexture.prototype = $extend(BaseExample.prototype,{
	prepareRenderOptions: function() {
		var opt = BaseExample.prototype.prepareRenderOptions.call(this);
		opt.transparent = true;
		return opt;
	}
});
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
VideoTexture.main();
})(typeof console != "undefined" ? console : {log:function(){}});
