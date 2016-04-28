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
var SpriteSheetAnimation = function() {
	BaseExample.call(this);
	var loader = new PIXI.loaders.Loader();
	loader.add("_assets/basics/fighter.json").load($bind(this,this.onAssetsLoaded));
};
SpriteSheetAnimation.main = function() {
	new SpriteSheetAnimation();
};
SpriteSheetAnimation.__super__ = BaseExample;
SpriteSheetAnimation.prototype = $extend(BaseExample.prototype,{
	onAssetsLoaded: function() {
		var frames = [];
		var _g = 0;
		while(_g < 30) {
			var i = _g++;
			var val;
			if(i < 10) val = "0" + i; else if(i == null) val = "null"; else val = "" + i;
			frames.push(PIXI.Texture.fromFrame("rollSequence00" + val + ".png"));
		}
		this.movie = new PIXI.extras.MovieClip(frames);
		this.movie.position.set(300);
		this.movie.anchor.set(0.5);
		this.movie.animationSpeed = 0.5;
		this.movie.play();
		this.get_stage().addChild(this.movie);
	}
	,animate: function(deltaTime) {
		this.movie.rotation += 0.6 * deltaTime;
	}
});
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
SpriteSheetAnimation.main();
})(typeof console != "undefined" ? console : {log:function(){}});
