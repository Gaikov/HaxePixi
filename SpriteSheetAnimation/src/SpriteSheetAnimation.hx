package ;
import pixi.core.textures.Texture;
import pixi.loaders.Loader;
import pixi.extras.MovieClip;

class SpriteSheetAnimation extends BaseExample
{
	private var movie:MovieClip;

	public function new()
	{
		super();

		var loader = new Loader();

		loader.add('_assets/basics/fighter.json').load(onAssetsLoaded);
	}

	private function onAssetsLoaded()
	{
		// create an array of textures from an image path
		var frames = [];

		for (i in 0...30)
		{
			var val:String = i < 10 ? '0' + i : Std.string(i);

			// magically works since the spritesheet was loaded with the pixi loader
			frames.push(Texture.fromFrame('rollSequence00' + val + '.png'));
		}


		// create a MovieClip (brings back memories from the days of Flash, right ?)
		movie = new MovieClip(frames);

		/*
     * A MovieClip inherits all the properties of a PIXI sprite
     * so you can change its position, its anchor, mask it, etc
     */
		movie.position.set(300);

		movie.anchor.set(0.5);
		movie.animationSpeed = 0.5;

		movie.play();

		stage.addChild(movie);
	}

	override private function animate(deltaTime:Float):Void
	{
		movie.rotation += 0.6 * deltaTime;
	}

	static public function main():Void
	{
		new SpriteSheetAnimation();
	}
}
