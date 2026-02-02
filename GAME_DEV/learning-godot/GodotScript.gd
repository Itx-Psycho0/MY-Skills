extends Object

class_name Character:


    static var c_c : int = 0


    var _name : String = "No name"

     
    var  health: int:
        set = set_health, get = get_health


    func _init(name: String)->void:
        _name = name



    func say_name() -> void:
        print(_name)


    # refCounted and memory 
    # like we make a class without extend object class and call it in other class by new() then its make memory and if it not used godot will free the memory. if we use extends Object then its will be deletd by free() function. and its not refcounted.


    # Lifecycle callbacks

    func _init()->void:
        print("initialized")
    
    func _enter_tree()->void:
        print("entered tree")

    func _ready()->void:
        print("ready")

    func _process(delta: float)->void:
        pass

    func _exit_tree()->void:
        print("exited tree")

      
var me: Character = Character.new("Psycho")
me.say_name()