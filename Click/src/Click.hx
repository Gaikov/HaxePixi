package ;
import js.html.EventTarget;
import pixi.core.sprites.Sprite;

class Click extends BaseExample
{
	private var _sprite:Sprite;

	public function new()
	{
		super();

		_sprite = Sprite.fromImage('_assets/basics/bunny.png');

		_sprite.position.set(230,264);
		_sprite.interactive = true;

		_sprite.on('mousedown', onDown);
		_sprite.on('touchstart', onDown);

		stage.addChild(_sprite);
	}

	private function onDown (eventData:EventTarget) {

		_sprite.scale.x += 0.3;
		_sprite.scale.y += 0.3;
	}

	static public function main():Void
	{
		new Click();
	}
}
