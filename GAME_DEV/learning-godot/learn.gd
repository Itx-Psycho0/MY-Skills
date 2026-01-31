extends MeshInstance3D

@onready var cap = $cap
var speed : int = 6
var direction : int = 0



# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	print("Hello World!") # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta: float) -> void:
	if Input.is_action_pressed("Move"):
			cap.velocity.x = speed
	