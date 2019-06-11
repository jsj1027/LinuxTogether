all: main
	echo All done

main: main.cpp
	g++ $< -o $@ `pkg-config gtkmm-3.0 --cflags --libs`

clean:
	rm main