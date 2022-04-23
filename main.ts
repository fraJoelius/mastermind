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
    pins.digitalWritePin(DigitalPin.P9, 0)
    pins.digitalWritePin(DigitalPin.P12, 1)
    if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        basic.showString(".")
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        bildeeineReihe("0")
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        basic.showString("#")
    } else if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        überprüfedieVermutung()
    }
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P11, 1)
    if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        bildeeineReihe("7")
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        bildeeineReihe("8")
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        bildeeineReihe("9")
    } else if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        basic.showString("C")
    }
    pins.digitalWritePin(DigitalPin.P11, 0)
    pins.digitalWritePin(DigitalPin.P10, 1)
    if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        bildeeineReihe("4")
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        bildeeineReihe("5")
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        bildeeineReihe("6")
    } else if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        basic.showString("B")
    }
    pins.digitalWritePin(DigitalPin.P10, 0)
    pins.digitalWritePin(DigitalPin.P9, 1)
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
/**
 * THE GAME OF MOO!
 * 
 * Connect a 4x4 matrix keypad like this:
 * 
 * Rows:
 * 
 * keypad / micro:bit pin
 * 
 * 1.          0
 * 
 * 2.          1
 * 
 * 3.          2
 * 
 * 4           8
 * 
 * Columns
 * 
 * 5.         13
 * 
 * 6.         14
 * 
 * 7.         15
 * 
 * 8.         16
 * 
 * How to play:
 * 
 * The micro:bit thinks of a 4 digit number which you have to guess. There are no zeroes and each digit in the number is unique. 
 * 
 * Enter a 4 digit number and press D to evaluate your guess.
 * 
 * It shows the number of bulls and cows.
 * 
 * Bulls are right numbers in the right place.
 * 
 * Cows are right numbers in the wrong place.
 * 
 * You can press A+B to cheat and see the answer.
 * 
 * Improve it:
 * 
 * - Limit the number of turns
 * 
 * - Check if the digits in guesses are unique
 * 
 * - 2-player version using radio
 */
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
