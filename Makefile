all: main
	echo All done

main: main.cpp
	g++ $< -o lxtg `pkg-config gtkmm-3.0 --cflags --libs`

clean:
	rm lxtg