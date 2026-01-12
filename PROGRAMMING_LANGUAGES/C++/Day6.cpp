//Day 6:-
// Double buffering :- SO using ray lib in c++ tat doing buffering its like loading next frame also seeing same but also change bakcground everry frame , not still on one frame color. that why we us3e clear background.

#include "raylib.h"
int main(){
    InitWindow(800,600,"My First Window");
    SetTargetFPS(60);
    while(true){
        BeginDrawing();
        ClearBackground(RED);
        EndDrawing();
    }
    /* code */
    return 0;
}
