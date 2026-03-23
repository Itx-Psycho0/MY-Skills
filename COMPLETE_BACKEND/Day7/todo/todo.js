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
    console.log("Tasks:");
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
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

