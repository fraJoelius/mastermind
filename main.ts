function überprüfedieVermutung () {
    if (VermutedieReihe.length == 4) {
        wenden += 1
        if (VermutedieReihe == VermutedieZahl) {
            basic.showString("du hast es geschafft")
            basic.showNumber(wenden)
            basic.showString("wende")
            basic.pause(5000)
            Neustart()
        } else {
            zähleKatzeundHunde()
        }
    } else {
        basic.showString("alles falsch")
    }
    VermutedieReihe = ""
}
function Neustart () {
    wenden = 0
    VermutedieReihe = ""
    VermutedieZahl = ""
    while (VermutedieZahl.length < 4) {
        beliebig = randint(1, 9)
        if (!(VermutedieZahl.includes(convertToText(beliebig)))) {
            VermutedieZahl = "" + VermutedieZahl + convertToText(beliebig)
        }
    }
    basic.showString("Vermute meine Zahl")
    basic.pause(1000)
}
function zähleKatzeundHunde () {
    Katze = 0
    Hunde = 0
    for (let index = 0; index <= 3; index++) {
        if (VermutedieReihe.substr(index, 1) == VermutedieZahl.substr(index, 1)) {
            Katze += 1
        } else {
            if (VermutedieZahl.includes(VermutedieReihe.substr(index, 1))) {
                Hunde += 1
            }
        }
    }
    basic.showNumber(Katze)
    basic.showString("Katze")
    basic.showNumber(Hunde)
    basic.showString("Hunde")
}
function bildeeineReihe (key: string) {
    basic.showString(key)
    VermutedieReihe = "" + VermutedieReihe + key
}
function ZuordnungTastatur () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
    if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        basic.showString(".")
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        bildeeineReihe("0")
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        basic.showString("#")
    } else if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        überprüfedieVermutung()
    }
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        bildeeineReihe("7")
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        bildeeineReihe("8")
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        bildeeineReihe("9")
    } else if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        basic.showString("C")
    }
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        bildeeineReihe("4")
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        bildeeineReihe("5")
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        bildeeineReihe("6")
    } else if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        basic.showString("B")
    }
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P0, 1)
    if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        bildeeineReihe("1")
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        bildeeineReihe("2")
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        bildeeineReihe("3")
    } else if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        basic.showString("A")
    } else {
        basic.clearScreen()
    }
}
let Hunde = 0
let Katze = 0
let beliebig = 0
let VermutedieZahl = ""
let wenden = 0
let VermutedieReihe = ""
Neustart()
basic.forever(function () {
    while (true) {
        ZuordnungTastatur()
        if (input.buttonIsPressed(Button.AB)) {
            basic.showString(VermutedieZahl)
        }
    }
})
