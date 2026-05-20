const input = document.getElementById("write")
const btn = document.getElementById("add")
const list = document.getElementById("todo")
const savedtasks = localStorage.getItem("todo");
let tasks = JSON.parse(savedtasks) || [];

function rendertasks() {
    // Clear the list before rendering to avoid duplicate tasks in the UI
    list.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li")

        // Adding text to the li
        const txt = document.createElement("span");
        txt.innerText = task; // Use 'task' instead of 'inputvalue'

        // Delete Button
        const del = document.createElement("button");
        del.innerText = "Delete"

        // Checkbox ! 
        const Checkbox = document.createElement("input");
        Checkbox.type = "checkbox";
        Checkbox.innerText = "Done";

        // Appending all
        li.append(txt);
        li.append(Checkbox);
        li.append(del);
        list.append(li);

        // Delete Button event listener
        del.addEventListener("click", () => {
            console.log("clicked !!! ");
            li.remove()
            const index = tasks.indexOf(task) // Use 'task' instead of 'inputvalue'
            if (index > -1) {
                tasks.splice(index, 1)
            }
            console.log(tasks);
            localStorage.setItem("todo", JSON.stringify(tasks))
        })

        Checkbox.addEventListener("change", () => {
            if (Checkbox.checked) {
                txt.style.textDecoration = "line-through";
            } else {
                txt.style.textDecoration = "none";
            }
        })
    });
}

// Initial render of saved tasks
rendertasks()

btn.addEventListener("click", () => {
    // Get the current value from the input when the button is clicked
    const inputvalue = input.value.trim();

    if (inputvalue === "") {
        alert("Please Enter a Task")
    } else {
        tasks.push(inputvalue)
        localStorage.setItem("todo", JSON.stringify(tasks))
        rendertasks()
        input.value = "" // Clear the input field after adding the task
    }
})