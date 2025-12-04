datalogger.onLogFull(function () {
    logging = false
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onButtonPressed(Button.A, function () {
    logging = true
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Skull)
    datalogger.deleteLog()
    datalogger.setColumnTitles(
    "Acceleration",
    "light",
    "Temperature",
    "Direction"
    )
})
input.onButtonPressed(Button.B, function () {
    logging = false
    basic.showIcon(IconNames.No)
})
let logging = false
logging = false
basic.showIcon(IconNames.No)
datalogger.setColumnTitles(
"Acceleration",
"light",
"Temperature",
"Direction"
)
loops.everyInterval(1, function () {
    if (logging) {
        basic.showIcon(IconNames.Fabulous)
    }
    datalogger.log(
    datalogger.createCV("Acceleration", input.acceleration(Dimension.X)),
    datalogger.createCV("light", input.lightLevel()),
    datalogger.createCV("Temperature", input.temperature()),
    datalogger.createCV("Direction", input.compassHeading())
    )
    basic.clearScreen()
})
