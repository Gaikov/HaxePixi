package ;
import pixi.core.renderers.Detector;
import js.Browser;
import pixi.core.renderers.SystemRenderer;
import pixi.core.display.Container;

class BaseExample
{
	private var _renderer:SystemRenderer;
	private var _prevTime:Float = 0;
	private var _stage:Container = new Container();

	public function new()
	{
		_renderer = Detector.autoDetectRenderer(800, 600, prepareRenderOptions());
		Browser.document.body.appendChild(_renderer.view);
		Browser.window.requestAnimationFrame(loop);
	}

	private function prepareRenderOptions():RenderingOptions
	{
		return {backgroundColor:0x1099bb};
	}

	public var renderer(get, null):SystemRenderer;

	private function get_renderer():SystemRenderer
	{
		return _renderer;
	}

	public var stage(get, null):Container;

	private function get_stage():Container
	{
		return _stage;
	}

	private function animate(deltaTime:Float):Void
	{
	}

	private function loop(currentTime:Float):Void
	{
		Browser.window.requestAnimationFrame(loop);
		var deltaTime:Float = (currentTime - _prevTime)/1000;
		_prevTime = currentTime;

		animate(deltaTime);

		_renderer.render(_stage);
	}
}
