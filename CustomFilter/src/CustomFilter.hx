package ;
import pixi.loaders.Resource;
import pixi.loaders.Loader;
import pixi.core.sprites.Sprite;
import pixi.core.renderers.webgl.filters.AbstractFilter;

class CustomFilter extends BaseExample
{
	private var _background:Sprite;
	private var _filter:MyCustomFilter;

	public function new()
	{
		super();

		_background = Sprite.fromImage("_assets/bkg-grass.jpg");
		_background.scale.set(1.3,1);
		stage.addChild(_background);

		var loader:Loader = new Loader();
		loader.add('shader','_assets/basics/shader.frag', onLoaded);
		loader.load();
	}

	private function onLoaded (res:Resource)
	{
		_filter = new MyCustomFilter(res.data);
		_background.filters = [_filter];
	}

	override private function animate(deltaTime:Float):Void
	{
		if (_filter != null) //wait for load
		{
			_filter.customUniform.value += 2.4 * deltaTime;
		}
	}

	static public function main():Void
	{
		new CustomFilter();
	}
}

class MyCustomFilter extends AbstractFilter
{
	public var customUniform = {type : '1f', value : 0.0};

	public function new(fragmentSource:Dynamic)
	{
		super(null, fragmentSource, {customUniform:customUniform});
	}
}
