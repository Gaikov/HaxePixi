package ;
import js.Browser;
import js.html.VideoElement;
import pixi.core.renderers.Detector.RenderingOptions;
import pixi.core.sprites.Sprite;
import pixi.core.textures.Texture;

class VideoTexture extends BaseExample
{
	public function new()
	{
		super();


		var video = Browser.document.createVideoElement();
		video.src = "_assets/testVideo.mp4";

// create a video texture from a video element
		var texture = Texture.fromVideo(video);

// create a new Sprite using the video texture (yes it's that easy)
		var videoSprite = new Sprite(texture);

		videoSprite.width = renderer.width;
		videoSprite.height = renderer.height;

		stage.addChild(videoSprite);
	}

	override private function prepareRenderOptions():RenderingOptions
	{
		var opt = super.prepareRenderOptions();
		opt.transparent = true;
		return opt;
	}

	static public function main():Void
	{
		new VideoTexture();
	}
}
