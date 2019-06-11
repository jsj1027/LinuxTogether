#include <gtkmm-3.0/gtkmm.h>

// compile with gtklibs   g++ main.cpp -o main.cpp `pkg-config gtkmm-3.0 --cflags --libs`
int main(int argc, char* argv[]) {
    Gtk::Main kit(argc, argv);

    Gtk::Window window;

    Gtk::Main::run(window);

    return 0;
}