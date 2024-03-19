basic.showIcon(IconNames.House)
ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("MovilCRIE", "CRIECRIE")
basic.showIcon(IconNames.Yes)
let Envio = 0
if (ESP8266_IoT.wifiState(true)) {
    basic.showIcon(IconNames.Heart)
}
basic.forever(function () {
    basic.pause(15000)
    basic.showNumber(Envio)
    ESP8266_IoT.connectThingSpeak()
    ESP8266_IoT.setData(
    "apikey",
    randint(0, 10),
    randint(0, 10),
    Environment.ReadLightIntensity(AnalogPin.P1)
    )
    ESP8266_IoT.uploadData()
    Envio = Envio + 1
})
