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


    

      
var me: Character = Character.new("Psycho")
me.say_name()