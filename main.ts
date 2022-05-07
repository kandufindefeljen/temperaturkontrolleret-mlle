let i = 0
OLED.init(128, 64)
basic.forever(function () {
    i = smarthome.dht11Sensor(DigitalPin.P1, smarthome.DHT11_state.DHT11_temperature_C)
    OLED.writeNumNewLine(i)
    if (i > 24) {
        smarthome.motorFan(AnalogPin.P2, true)
    } else {
        smarthome.motorFan(AnalogPin.P2, false)
    }
    basic.pause(2000)
})
