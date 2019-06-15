#include <gtkmm-3.0/gtkmm.h>
#include <CLI11.hpp>
#include <sys/utsname.h>
#include <stdio.h>

int uname(struct utsname *buf);

int main(int argc, char* argv[]) {
    utsname* hi;
    uname(hi); 
    // char* ok = hi->sysname;
    printf("HI: %s\n%s\n%s\n%s\n%s\n%s\n", hi->sysname, hi->nodename, hi->release, hi->version, hi->machine, hi->domainname);
    
    Gtk::Main kit(argc, argv);

    Gtk::Window window;

    Gtk::Main::run(window);


    return 0;
}