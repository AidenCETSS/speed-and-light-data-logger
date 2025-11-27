def on_log_full():
    global logging
    logging = False
    basic.show_leds("""
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        """)
datalogger.on_log_full(on_log_full)

def on_button_pressed_a():
    global logging
    logging = True
    basic.show_icon(IconNames.YES)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    basic.show_icon(IconNames.SKULL)
    datalogger.delete_log()
    datalogger.set_column_titles("temperature", "light")
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global logging
    logging = False
    basic.show_icon(IconNames.NO)
input.on_button_pressed(Button.B, on_button_pressed_b)

logging = False
logging = False
basic.show_icon(IconNames.NO)
datalogger.set_column_titles("temperature", "light")

def on_every_interval():
    if logging:
        basic.show_icon(IconNames.HEART)
        datalogger.log(datalogger.create_cv("temperature", input.acceleration(Dimension.X)),
            datalogger.create_cv("light", input.light_level()))
        basic.clear_screen()
loops.every_interval(1, on_every_interval)
