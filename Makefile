CXX = g++
FLAGS = -Wall -g

all: main
	echo All done

main: main.cpp
	$(CXX) $(FLAGS) $< -o lxtg `pkg-config gtkmm-3.0 --cflags --libs` src/testScript.cpp

clean:
	rm lxtg test.txt