all: main
	echo All done

src: src/testScript.cpp

main: main.cpp src
	g++ $< -o lxtg `pkg-config gtkmm-3.0 --cflags --libs`

clean:
	rm lxtg