const fs=require("fs");
const args=process.argv.slice(2);
const command=args[0];

function loadTasks(){
    const data=fs.readFileSync("tasks.json");
    return JSON.parse(data);

}

function saveTasks(tasks){
    fs.writeFileSync("tasks.json",JSON.stringify(tasks,null,3));

}

if(command==="add"){
    const tasks=loadTasks();
    const newTask={
        id:tasks.length+1,
        description:args[1],
        status:"todo",
        createdAt:new Date(),
        updatedAt:new Date(),

    };
    tasks.push(newTask);
    saveTasks(tasks);
    console.log(`Task added successfully(ID:${newTask.id})`);
}