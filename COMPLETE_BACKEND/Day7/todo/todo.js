import fs from "node:fs";
const filePath = "./tasks.json";

const loadTasks = () => {
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const dataJSON = dataBuffer.toString();

        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
}
const addTask = (task) => {
    const tasks = loadTasks();
    tasks.push(task);
    fs.writeFileSync(filePath, JSON.stringify(tasks));
    console.log(`Task added: ${task}`);
}

const listTasks = () => {
    const tasks = loadTasks();
    if(tasks.length === 0){
        console.log("No tasks found.");
        return;
    }
    console.log("Tasks:",tasks);
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
}
const deleteTask = (index) => {
    const tasks = loadTasks();
    if(index < 1 || index > tasks.length){
        console.log("Invalid task number.");
        return;
    }
    const removedTask = tasks.splice(index - 1, 1);
    fs.writeFileSync(filePath, JSON.stringify(tasks));
    console.log(`Task removed: ${removedTask[0]}`);
}

const command = process.argv[2];
const argument = process.argv[3];

if(command === "add"){
    addTask(argument);
} else if(command === "list"){
    listTasks();
} else if(command === "delete"){
    deleteTask(parseInt(argument));
} else{
    console.log("Invalid command");
}

