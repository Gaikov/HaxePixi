package ;
import pixi.core.text.Text;
class TextFields extends BaseExample
{
	public function new()
	{
		super();

		var basicText = new Text('Basic text in pixi');
		basicText.x = 30;
		basicText.y = 90;

		stage.addChild(basicText);

		var style:TextStyle = {
			font : 'bold italic 36px Arial',
			fill : '#F7EDCA',
			stroke : '#4a1850',
			strokeThickness : 5,
			dropShadow : true,
			dropShadowColor : '#000000',
			dropShadowAngle : Math.PI / 6,
			dropShadowDistance : 6,
			wordWrap : true,
			wordWrapWidth : 440
		};

		var richText = new Text('Rich text with a lot of options and across multiple lines',style);
		richText.x = 30;
		richText.y = 180;

		stage.addChild(richText);

	}

	static public function main():Void
	{
		new TextFields();
	}
}
