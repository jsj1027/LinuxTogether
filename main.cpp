#include <gtkmm-3.0/gtkmm.h>
#include <CLI11.hpp>
#include "src/testScript.h"

int main(int argc, char* argv[]) {
    Gtk::Main kit(argc, argv);

    Gtk::Window window;

    Gtk::Main::run(window);

    script();

    return 0;
}