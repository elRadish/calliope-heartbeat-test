serial.setBaudRate(BaudRate.BaudRate115200)
loops.everyInterval(10000, function () {
    serial.writeLine("ping")
})
basic.forever(function () {
	
})
loops.everyInterval(200, function () {
    serial.writeLine("iss/onAcc " + randint(1000, 10000))
})
