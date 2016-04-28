package ;
import pixi.extras.TilingSprite;
import pixi.core.textures.Texture;

class TileSprite extends BaseExample
{
	private var _tilingSprite:TilingSprite;
	private var _count:Float = 0;

	public function new()
	{
		super();

		var texture = Texture.fromImage('_assets/p2.jpeg');

/* create a tiling sprite ...
 * requires a texture, a width and a height
 * in WebGL the image size should preferably be a power of two
 */
		_tilingSprite = new TilingSprite(texture, renderer.width, renderer.height);
		stage.addChild(_tilingSprite);
	}

	override private function animate(deltaTime:Float):Void
	{
		_count += 0.3 * deltaTime;

		_tilingSprite.tileScale.x = 2 + Math.sin(_count);
		_tilingSprite.tileScale.y = 2 + Math.cos(_count);

		_tilingSprite.tilePosition.x += 60 * deltaTime;
		_tilingSprite.tilePosition.y += 60 * deltaTime;
	}

	static public function main():Void
	{
		new TileSprite();
	}
}
