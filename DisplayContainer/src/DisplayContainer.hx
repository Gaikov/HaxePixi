package ;
import pixi.core.display.Container;
import pixi.core.sprites.Sprite;

class DisplayContainer extends BaseExample
{
	public function new()
	{
		super();
		var container = new Container();

		stage.addChild(container);

		for (j in 0...5)
		{
			for (i in 0...5)
			{
				var bunny = Sprite.fromImage('_assets/basics/bunny.png');
				bunny.x = 40 * i;
				bunny.y = 40 * j;
				container.addChild(bunny);
			};
		};

/*
 * All the bunnies are added to the container with the addChild method
 * when you do this, all the bunnies become children of the container, and when a container moves,
 * so do all its children.
 * This gives you a lot of flexibility and makes it easier to position elements on the screen
 */
		container.x = 100;
		container.y = 60;
	}

	static public function main():Void
	{
		new DisplayContainer();
	}
}
