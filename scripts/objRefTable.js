const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Plugins.TiledBg,
		C3.Behaviors.Anchor,
		C3.Behaviors.solid,
		C3.Plugins.Text,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Sprite.Acts.Destroy
	];
};
self.C3_JsPropNameTable = [
	{Платформер: 0},
	{СледитьЗа: 0},
	{герой: 0},
	{Якорь: 0},
	{жизнь: 0},
	{Твёрдый: 0},
	{платформа: 0},
	{куст: 0},
	{сердце: 0},
	{ТайловыйФон: 0},
	{Спрайт: 0},
	{Текст: 0},
	{Спрайт2: 0},
	{оррр: 0},
	{орр: 0}
];

self.InstanceType = {
	герой: class extends self.ISpriteInstance {},
	жизнь: class extends self.ITiledBackgroundInstance {},
	платформа: class extends self.ISpriteInstance {},
	куст: class extends self.ISpriteInstance {},
	сердце: class extends self.ISpriteInstance {},
	ТайловыйФон: class extends self.ITiledBackgroundInstance {},
	Спрайт: class extends self.ISpriteInstance {},
	Текст: class extends self.ITextInstance {},
	Спрайт2: class extends self.ISpriteInstance {}
}