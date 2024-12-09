basic.showIcon(IconNames.TShirt)
basic.forever(function () {
    if (cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) < 10) {
        cuteBot.motors(-20, -20)
        basic.pause(500)
        while (!(cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) && !(cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) && !(cuteBot.tracking(cuteBot.TrackingState.L_R_line))) {
            cuteBot.motors(20, -20)
        }
    } else {
        if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
            cuteBot.motors(25, 10)
        } else if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
            cuteBot.motors(10, 25)
        } else if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
            cuteBot.motors(15, 15)
        } else {
            cuteBot.motors(0, 0)
        }
    }
})
