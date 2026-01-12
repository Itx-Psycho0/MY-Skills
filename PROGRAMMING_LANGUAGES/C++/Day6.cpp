//Day 6:-
// Double buffering :- SO using ray lib in c++ tat doing buffering its like loading next frame also seeing same but also change bakcground everry frame , not still on one frame color. that why we us3e clear background.

#include "raylib.h"
int main() {
    InitWindow(800,600,"My First Window");
    SetTargetFPS(60);

    int CircleX{100};
    int CircleY{100};
    int RectangleX{400};
    int RectangleY{0};
    int RectangleSpeed{10};
    int CircleRadius{20};
    int RectangleWidth{50};
    int RectangleHeight{50};
    int l_CircleX{CircleX-CircleRadius};
    int u_CircleY{CircleY-CircleRadius};
    int r_CircleX{CircleX+CircleRadius};
    int b_CircleY{CircleY+CircleRadius};
    int l_RectangleX{RectangleX};
    int u_RectangleY{RectangleY};
    int r_RectangleX{RectangleX+RectangleWidth};
    int b_RectangleY{RectangleY+RectangleHeight};

    bool Collision_with_rectangle =
                            (l_CircleX <= r_RectangleX) &&
                            (r_CircleX >= l_RectangleX) &&
                            (u_CircleY <= b_RectangleY) &&   
                            (b_CircleY >= u_RectangleY);


    while(!WindowShouldClose()){
        BeginDrawing();
        ClearBackground(BLUE);
        
        if(Collision_with_rectangle){
            DrawText("Game Over!",400,300,20,RED);
        }else{
            l_CircleX= CircleX-CircleRadius;
            u_CircleY= CircleY-CircleRadius;
            r_CircleX= CircleX+CircleRadius;
            b_CircleY= CircleY+CircleRadius;
            l_RectangleX= RectangleX;
            u_RectangleY= RectangleY;
            r_RectangleX= RectangleX+RectangleWidth;
            b_RectangleY= RectangleY+RectangleHeight;

            Collision_with_rectangle =
                            (l_CircleX <= r_RectangleX) &&
                            (r_CircleX >= l_RectangleX) &&
                            (u_CircleY <= b_RectangleY) &&   
                            (b_CircleY >= u_RectangleY);


            DrawCircle(CircleX,CircleY,CircleRadius,WHITE);
            DrawRectangle(RectangleX,RectangleY,RectangleHeight,RectangleWidth,RED);
            RectangleY += RectangleSpeed;
            if(RectangleY > 800 || RectangleY < 0){
            RectangleSpeed = -RectangleSpeed;
            }

            if(IsKeyDown(KEY_D) && CircleX < 800){
            CircleX += 10;
            }
            if(IsKeyDown(KEY_A) && CircleX > 0){
            CircleX -= 10;
            }
            if(IsKeyDown(KEY_W) && CircleY > 0){
            CircleY -= 10;
            }
            if(IsKeyDown(KEY_S) && CircleY < 600){
            CircleY += 10;  
            }

        }

        EndDrawing();
    }
    /* code */
    return 0;
}
