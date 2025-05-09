radio.onReceivedNumber(function (receivedNumber) {
    signal_strength = Math.constrain(radio.receivedPacket(RadioPacketProperty.SignalStrength), -90, -50)
    led.plotBarGraph(
    Math.map(signal_strength, -90, -50, 0, 15),
    15
    )
})
let pitch = 0
let interval = 0
let signal_strength = 0
radio.setGroup(1)
music.setVolume(80)
// Challenge 1
basic.forever(function () {
    interval = Math.constrain(Math.map(Math.abs(signal_strength), 50, 90, 10, 2000), 10, 2000)
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.InBackground)
    basic.pause(interval)
})
// Challenge 2
basic.forever(function () {
    interval = Math.constrain(Math.map(Math.abs(signal_strength), 50, 90, 10, 2000), 10, 2000)
    pitch = Math.constrain(Math.map(signal_strength, -90, -50, 262, 523), 262, 523)
    music.play(music.tonePlayable(pitch, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.InBackground)
    basic.pause(interval)
})
