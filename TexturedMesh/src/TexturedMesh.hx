package ;
import pixi.core.graphics.Graphics;
import pixi.mesh.Rope;
import pixi.core.textures.Texture;
import pixi.core.math.Point;
class TexturedMesh extends BaseExample
{
	var count:Float = 0;
	var points:Array<Point> = [];
	var ropeLength:Float = 45;
	var g = new Graphics();

	public function new()
	{
		super();

// build a rope!
		for (i in 0...25)
		{
			points.push(new Point(i * ropeLength, 0));
		}

		var strip = new Rope(Texture.fromImage('_assets/snake.png'), points);
		strip.position.x = -40;
		strip.position.y = 300;
		stage.addChild(strip);

		g.x = strip.x;
		g.y = strip.y;
		stage.addChild(g);
	}

	override private function animate(deltaTime:Float):Void
	{
		count += 0.1;

		// make the snake
		for (i in 0...points.length)
		{
			points[i].y = Math.sin((i * 0.5) + count) * 30;
			points[i].x = i * ropeLength + Math.cos((i * 0.3) + count) * 20;
		}

		renderPoints();
	}

	private function renderPoints()
	{
		g.clear();
		g.lineStyle(2, 0xffc2c2);
		g.moveTo(points[0].x, points[0].y);

		for (i in 1...points.length)
		{
			g.lineTo(points[i].x, points[i].y);
		};

		for (i in 1...points.length)
		{
			g.beginFill(0xff0022);
			g.drawCircle(points[i].x, points[i].y, 10);
			g.endFill();
		};
	}

	static public function main():Void
	{
		new TexturedMesh();
	}
}
