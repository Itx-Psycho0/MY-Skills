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
