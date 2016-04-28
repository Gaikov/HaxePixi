package ;

import pixi.core.sprites.Sprite;
import pixi.core.textures.Texture;
import pixi.core.renderers.SystemRenderer;
import pixi.core.renderers.webgl.WebGLRenderer;
import pixi.core.display.Container;
import js.Browser;
import pixi.core.renderers.Detector;

class Basics
{
	private var _renderer:SystemRenderer;
	private var _prevTime:Float = 0;
	private var _stage:Container = new Container();

	private var _bunny:Sprite;

	public function new()
	{
		_renderer = Detector.autoDetectRenderer(800, 600);
		Browser.document.body.appendChild(_renderer.view);
		Browser.window.requestAnimationFrame(loop);


		// create a texture from an image path
		var texture = Texture.fromImage('_assets/basics/bunny.png');

		// create a new Sprite using the texture
		_bunny = new Sprite(texture);

		// center the sprite's anchor point
		_bunny.anchor.x = 0.5;
		_bunny.anchor.y = 0.5;

		// move the sprite to the center of the screen
		_bunny.position.x = 200;
		_bunny.position.y = 150;

		stage.addChild(_bunny);
	}

	public var stage(get, null):Container;

	public function get_stage():Container
	{
		return _stage;
	}

	private function animate(deltaTime:Float):Void
	{
		_bunny.rotation += deltaTime * 6;
	}

	private function loop(currentTime:Float):Void
	{
		Browser.window.requestAnimationFrame(loop);
		var deltaTime:Float = (currentTime - _prevTime)/1000;
		_prevTime = currentTime;

		animate(deltaTime);

		_renderer.render(_stage);
	}

	static public function main():Void
	{
		new Basics();
	}
}
