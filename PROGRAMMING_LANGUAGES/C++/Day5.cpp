// why in quotes? because raylib.h is not in standard include directories
//for adding external libraries we use double quotes
//.h means header file
// #include "raylib.h"
#include<cstdio>
int main(){
    // InitWindow(800,600,"My First Window");
    for(int i=0;i<5;i++){
        //code to be repeated
        printf("Hello Guys %d\n",i);
    }
    return 0;
}
// Loops
// for(int i=0;i<5;i++){
//     //code to be repeated
// }
// while(condition){
//     //code to be repeated    
// }

// do{
//     //code to be repeated
// }while(condition);
