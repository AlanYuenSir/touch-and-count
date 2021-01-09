input.onButtonPressed(Button.A, function () {
    if (ingame == 0) {
        start()
    }
})
function init () {
    ingame = 0
    status = 0
    hitcounter = 0
}
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    if (ingame == 1 && status == 1) {
        status = 0
        basic.clearScreen()
        hitcounter += 1
    }
})
function start () {
    ingame = 1
    hitcounter = 0
    ingame = 0
    basic.pause(randint(500, 3000))
    status = 1
    basic.showIcon(IconNames.Happy)
    basic.pause(2000)
    status = 0
    basic.clearScreen()
    basic.showNumber(hitcounter)
}
let hitcounter = 0
let status = 0
let ingame = 0
init()
