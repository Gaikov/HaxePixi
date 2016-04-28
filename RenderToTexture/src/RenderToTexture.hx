package ;
import pixi.core.math.Matrix;
import pixi.core.Pixi;
import pixi.core.textures.RenderTexture;
import pixi.core.sprites.Sprite;
import pixi.core.display.Container;

class RenderToTexture extends BaseExample
{
	private var _renderTexture:RenderTexture;
	private var _container:Container;
	private var _matrix:Matrix = new Matrix();

	public function new()
	{
		super();

		_container = new Container();

		stage.addChild(_container);

		for (j in 0...5)
		{

			for (i in 0...5)
			{
				var bunny = Sprite.fromImage('_assets/basics/bunny.png');
				bunny.x = 30 * i;
				bunny.y = 30 * j;
				bunny.rotation = Math.random() * (Math.PI * 2);
				_container.addChild(bunny);
			};
		};

		_renderTexture = new RenderTexture(cast renderer, 300, 200, Pixi.SCALE_MODES.LINEAR, 0.1);

		var sprite = new Sprite(_renderTexture);

		sprite.x = 450;
		sprite.y = 60;
		stage.addChild(sprite);
/*
 * All the bunnies are added to the container with the addChild method
 * when you do this, all the bunnies become children of the container, and when a container moves,
 * so do all its children.
 * This gives you a lot of flexibility and makes it easier to position elements on the screen
 */
		_container.x = 100;
		_container.y = 60;
	}

	override private function animate(deltaTime:Float):Void
	{
		_container.rotation += 6 * deltaTime;

		_matrix.identity();
		_matrix.rotate(_container.rotation);
		_matrix.translate(150, 100);

		_renderTexture.clear();
		_renderTexture.render(_container, _matrix);
	}

	static public function main():Void
	{
		new RenderToTexture();
	}
}
