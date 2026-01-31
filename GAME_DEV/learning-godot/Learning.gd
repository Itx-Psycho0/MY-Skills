@tool
extends EditorScripts

# case sensitive and dont re-declaration

func _run() -> void:
    print("OK")
    var age  = 10
    var iS = True
    var h = 3.2
    var name := "Psycho" # shorthand of static typing
    #type_string
    var age: int = 10 # it cant changs its type in future
    # Static typing
    print(age)

    #if else elif same as python
    #While and for loop also
    #break continue
    var arr : Array[String] = ["a","b","c","d"]
    # arr.erase("b")
    var rand : String = arr.pick_random()

    arr.shuffle()
    arr.size()

    var dict: Dictionary = {
        0:"a",
        1:"b"
    }

    print("Hello %s, your age is %d"%(name,age))

    #enum and constant and match case
    enum Race {HHO,ELEF,HUMAN}