input.onButtonPressed(Button.A, function () {
    Posizione.change(LedSpriteProperty.X, -1)
    radio.sendValue("x", Posizione.get(LedSpriteProperty.X))
    radio.sendValue("y", Posizione.get(LedSpriteProperty.Y))
})
input.onGesture(Gesture.LogoUp, function () {
    Posizione.change(LedSpriteProperty.Y, -1)
    radio.sendValue("x", Posizione.get(LedSpriteProperty.X))
    radio.sendValue("y", Posizione.get(LedSpriteProperty.Y))
})
input.onButtonPressed(Button.B, function () {
    Posizione.change(LedSpriteProperty.X, 1)
    radio.sendValue("x", Posizione.get(LedSpriteProperty.X))
    radio.sendValue("y", Posizione.get(LedSpriteProperty.Y))
})
radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        x = value
    } else if (name == "y") {
        y = value
    }
    led.plotBrightness(x, y, 255)
    if (Posizione.get(LedSpriteProperty.Y) == y && Posizione.get(LedSpriteProperty.X) == x) {
        images.iconImage(IconNames.No).showImage(0)
        music.playTone(131, music.beat(BeatFraction.Double))
        game.gameOver()
    }
})
input.onGesture(Gesture.LogoDown, function () {
    Posizione.change(LedSpriteProperty.Y, 1)
    radio.sendValue("x", Posizione.get(LedSpriteProperty.X))
    radio.sendValue("y", Posizione.get(LedSpriteProperty.Y))
})
let y = 0
let x = 0
let Posizione: game.LedSprite = null
Posizione = game.createSprite(2, 2)
basic.forever(function () {
	
})
