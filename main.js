const inputEl = document.getElementById("input_task")
const saver = document.getElementById("saver")
const section = document.getElementById("tasks")

let taskNumber = 0
saver.addEventListener("click", function() {
    let task = inputEl.value
    let taskDiv = document.createElement("div")
    taskDiv.className = "task_div"
    taskDiv.id = `task${taskNumber}`
    taskDiv.innerHTML =
    `<span class="task">${task}</span>
    <div class="checkbox-wrapper">
        <input type="checkbox" class="checkbox">
        <button class="deleter"><strong>Delete task</strong></button>
    </div>`
    
    section.appendChild(taskDiv) 

    const deleteBtn = taskDiv.querySelector(".deleter");
    deleteBtn.addEventListener("click", function () {
        section.removeChild(taskDiv)
    })
    inputEl.value = ""
    taskNumber += 1
})

