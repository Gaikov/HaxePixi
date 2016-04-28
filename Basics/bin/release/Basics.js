(function (console) { "use strict";
var Basics = function() {
	this._stage = new PIXI.Container();
	this._prevTime = 0;
	this._renderer = PIXI.autoDetectRenderer(800,600);
	window.document.body.appendChild(this._renderer.view);
	window.requestAnimationFrame($bind(this,this.loop));
	var texture = PIXI.Texture.fromImage("_assets/basics/bunny.png");
	this._bunny = new PIXI.Sprite(texture);
	this._bunny.anchor.x = 0.5;
	this._bunny.anchor.y = 0.5;
	this._bunny.position.x = 200;
	this._bunny.position.y = 150;
	this.get_stage().addChild(this._bunny);
};
Basics.main = function() {
	new Basics();
};
Basics.prototype = {
	get_stage: function() {
		return this._stage;
	}
	,animate: function(deltaTime) {
		this._bunny.rotation += deltaTime * 6;
	}
	,loop: function(currentTime) {
		window.requestAnimationFrame($bind(this,this.loop));
		var deltaTime = (currentTime - this._prevTime) / 1000;
		this._prevTime = currentTime;
		this.animate(deltaTime);
		this._renderer.render(this._stage);
	}
};
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
Basics.main();
})(typeof console != "undefined" ? console : {log:function(){}});
