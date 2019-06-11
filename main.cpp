#include <gtk+-3.24.8/gtkmm.h>

int main(int argc, char* argv[]) {
    Gtk::Main kit(argc, argv);

    Gtk::MainWindow window;

    Gtk::Main::run(window);

    return 0;
}