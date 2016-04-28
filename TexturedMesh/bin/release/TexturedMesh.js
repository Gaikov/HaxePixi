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
var TexturedMesh = function() {
	this.g = new PIXI.Graphics();
	this.ropeLength = 45;
	this.points = [];
	this.count = 0;
	BaseExample.call(this);
	var _g = 0;
	while(_g < 25) {
		var i = _g++;
		this.points.push(new PIXI.Point(i * this.ropeLength,0));
	}
	var strip = new PIXI.mesh.Rope(PIXI.Texture.fromImage("_assets/snake.png"),this.points);
	strip.position.x = -40;
	strip.position.y = 300;
	this.get_stage().addChild(strip);
	this.g.x = strip.x;
	this.g.y = strip.y;
	this.get_stage().addChild(this.g);
};
TexturedMesh.main = function() {
	new TexturedMesh();
};
TexturedMesh.__super__ = BaseExample;
TexturedMesh.prototype = $extend(BaseExample.prototype,{
	animate: function(deltaTime) {
		this.count += 0.1;
		var _g1 = 0;
		var _g = this.points.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.points[i].y = Math.sin(i * 0.5 + this.count) * 30;
			this.points[i].x = i * this.ropeLength + Math.cos(i * 0.3 + this.count) * 20;
		}
		this.renderPoints();
	}
	,renderPoints: function() {
		this.g.clear();
		this.g.lineStyle(2,16761538);
		this.g.moveTo(this.points[0].x,this.points[0].y);
		var _g1 = 1;
		var _g = this.points.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.g.lineTo(this.points[i].x,this.points[i].y);
		}
		var _g11 = 1;
		var _g2 = this.points.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			this.g.beginFill(16711714);
			this.g.drawCircle(this.points[i1].x,this.points[i1].y,10);
			this.g.endFill();
		}
	}
});
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
TexturedMesh.main();
})(typeof console != "undefined" ? console : {log:function(){}});
