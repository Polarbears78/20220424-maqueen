function LED () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(100)
    strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    basic.pause(100)
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(100)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(100)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(100)
    strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
    basic.pause(100)
    strip.showColor(neopixel.colors(NeoPixelColors.Violet))
    basic.pause(100)
    strip.showColor(neopixel.colors(NeoPixelColors.Purple))
    basic.pause(100)
}
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
strip.setBrightness(255)
basic.forever(function () {
    LED()
})
