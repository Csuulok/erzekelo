let jomerseklet = 0
input.onButtonPressed(Button.A, function () {
    jomerseklet = input.compassHeading()
    basic.showNumber(jomerseklet)
})
input.onButtonPressed(Button.AB, function () {
    jomerseklet = input.lightLevel()
    basic.showNumber(jomerseklet)
})
input.onButtonPressed(Button.B, function () {
    jomerseklet = input.temperature()
    basic.showNumber(jomerseklet)
})
