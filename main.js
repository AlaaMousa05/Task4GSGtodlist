// note: enter 7 to close the box and open the console then relode the page 
let arrOfTask=[];
let idtask=0,key=arrOfTask.length;
mintod();
function addTsk() {
    let Task = prompt("Please enter your task").toLowerCase();
    let ta={
        tod:Task,
        com:false,
        id:key++

    }
   arrOfTask.push(ta);
   console.log(` task Added:"${ ta.tod}"`);
   
   
mintod();
}
function viwetask() {
    if (arrOfTask.length === 0) {
        console.log("No tasks available.");
    }

    console.log("\nTasks:")
    arrOfTask.forEach((ta, index) => {
        console.log(`${index + 1}. ${ta.tod} [${ta.com? "Completed" : "Not Completed"}]`);
    });
    mintod();
 }
        

function toggeltask() {
    let toogell = prompt("Please enter your number toggle task");
    if (toogell > 0 && toogell <= arrOfTask.length){
    if( arrOfTask[toogell].com=true)
    arrOfTask[toogell].com=false;
else 
     arrOfTask[toogell].com=true;
}
else console.log(`Task with ID: ${numdelet} not found.`);

    mintod();
}
function editTasc() {
    let numedit = prompt("Please enter number task edit");
    if (numedit > 0 && numedit<= arrOfTask.length) {
    let edit = prompt("Please enter your editting");
    arrOfTask[numedit-1].tod=edit.toLowerCase();
    }
    else
    console.log(`Task with ID: ${numdelet} not found.`);
    mintod();
}
function deleteTask() {
    let numdelet = prompt("Please enter number task delet");

    if (numdelet > 0 && numdelet <= arrOfTask.length) {
        const delet = arrOfTask.splice(numdelet - 1, 1);
        console.log(`Task "${numdelet}" is deleted.`);
    }

    else {
        console.log(`Task with ID: ${numdelet} not found.`);
    }
    mintod();
}
function serch() {
    let search = prompt("Enter the task name to search").toLowerCase();
    let found = arrOfTask.find(task => task.tod.includes(search));

    if (found) {
        console.log(`Found Task: "${found.tod}" [${found.completed ? "Completed" : "Not Completed"}]`);
    }

    else {
        console.log(`No task found matching: "${search}".`);
    }

    mintod();
}
function mintod(){
    console.log("\nTask Manager");
    console.log("1. Add Task");
    console.log("2. View Tasks");
    console.log("3. Toggle Task Completion");
    console.log("4. Update Task");
    console.log("5. Delete Task");
    console.log("6. Search Tasks");
    console.log("7. Exit");

    let numOfChoice;
     numOfChoice = Number( prompt("Please enter your choice (1-6) enter 7 to Exit"));
    if(numOfChoice>=1 && numOfChoice<=7){
        switch (numOfChoice) {
            case 1:addTsk();break;
            case 2:viwetask();break;
            case 3:toggeltask();break;
            case 4:editTasc();break;
            case 5:deleteTask();break;
            case 6:serch();break;
            case 7:console.log("Exiting Task Manager...");
        }
    }
    
    else{
        console.log("Invalid choice , please enter between 1 and 6");
        mintod();
    } 
}

