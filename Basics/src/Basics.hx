package ;

import pixi.core.sprites.Sprite;
import pixi.core.textures.Texture;
import pixi.core.display.Container;

class Basics extends BaseExample
{
	private var _bunny:Sprite;

	public function new()
	{
		super();
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

	override private function animate(deltaTime:Float):Void
	{
		_bunny.rotation += deltaTime * 6;
	}

	static public function main():Void
	{
		new Basics();
	}
}
