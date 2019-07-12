#include <stdlib.h>

int script() {
    system("apt list --installed > test.txt");
    return 0;
}