input.onGesture(Gesture.SixG, function () {
    povolit = 0
    basic.showIcon(IconNames.Happy)
    basic.pause(500)
    basic.showIcon(IconNames.Surprised)
    basic.pause(200)
    basic.showIcon(IconNames.Asleep)
    basic.pause(200)
    basic.showIcon(IconNames.Sad)
    basic.pause(500)
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.clearScreen()
    povolit = 1
})
input.onButtonPressed(Button.A, function () {
    if (zpomaleni < 400) {
        zpomaleni += 20
    }
})
input.onButtonPressed(Button.AB, function () {
    if (smer_L == 0) {
        smer_L = 1
    } else {
        smer_L = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (zpomaleni > 20) {
        zpomaleni += -20
    }
})
let povolit = 0
let zpomaleni = 0
let smer_L = 0
smer_L = 0
zpomaleni = 200
let index = 0
povolit = 1
let mapa_x = [
0,
1,
2,
3,
4,
4,
4,
4,
4,
3,
2,
1,
0,
0,
0,
0
]
let mapa_y = [
0,
0,
0,
0,
0,
1,
2,
3,
4,
4,
4,
4,
4,
3,
2,
1
]
basic.forever(function () {
    if (povolit) {
        led.plot(mapa_x[index], mapa_y[index])
        basic.pause(zpomaleni)
        led.unplot(mapa_x[index], mapa_y[index])
        if (smer_L) {
            if (index > 0) {
                index += -1
            } else {
                index = 15
            }
        } else {
            if (index < 15) {
                index += 1
            } else {
                index = 0
            }
        }
    }
})
