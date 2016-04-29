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
var CustomFilter = function() {
	BaseExample.call(this);
	this._background = PIXI.Sprite.fromImage("_assets/bkg-grass.jpg");
	this._background.scale.set(1.3,1);
	this.get_stage().addChild(this._background);
	var loader = new PIXI.loaders.Loader();
	loader.add("shader","_assets/basics/shader.frag",null,$bind(this,this.onLoaded));
	loader.load();
};
CustomFilter.main = function() {
	new CustomFilter();
};
CustomFilter.__super__ = BaseExample;
CustomFilter.prototype = $extend(BaseExample.prototype,{
	onLoaded: function(res) {
		this._filter = new MyCustomFilter(res.data);
		this._background.filters = [this._filter];
	}
	,animate: function(deltaTime) {
		if(this._filter != null) this._filter.customUniform.value += 2.4 * deltaTime;
	}
});
var MyCustomFilter = function(fragmentSource) {
	this.customUniform = { type : "1f", value : 0.0};
	PIXI.AbstractFilter.call(this,null,fragmentSource,{ customUniform : this.customUniform});
};
MyCustomFilter.__super__ = PIXI.AbstractFilter;
MyCustomFilter.prototype = $extend(PIXI.AbstractFilter.prototype,{
});
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
CustomFilter.main();
})(typeof console != "undefined" ? console : {log:function(){}});
