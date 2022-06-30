const inputTask = document.getElementById('input-task');
const taskListLi = document.getElementById('task-list');
const addButton = document.getElementById('add-task-button');

let taskList = JSON.parse(localStorage.getItem("tasks")) || [];

const taskAdder = (content = false, id = false, checked = false) => {
    const li = document.createElement('li');
    const iden = id ? id : Math.random().toString();
    li.setAttribute('id', `tsk-${iden}`)
    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', `tsk-${iden}-chk`)
    input.checked = checked;
    input.addEventListener('change', () => {
        taskList = taskList.map((task) => {
            if (task.id === iden) {
                task.checked = input.checked;
            };
            return task;
        });
        localStorage.setItem("tasks", JSON.stringify(taskList));
    });
    const span = document.createElement('span');
    span.classList.add('task');
    span.innerHTML = content ? content : inputTask.value;
    const button = document.createElement('button');
    button.classList.add('delete-btn');
    button.innerHTML = 'Delete task';
    button.addEventListener('click', () => {
        taskListLi.removeChild(li);
        taskList = taskList.filter(item => item.id !== ider);
        localStorage.setItem("tasks", JSON.stringify(taskList));
    });
    li.appendChild(input);
    li.appendChild(span);
    li.appendChild(button);
    taskListLi.appendChild(li);
    if (!id) {
        taskList.push({
            content: inputTask.value,
            id: ider,
            checked: false
        });
        inputTask.value = "";
        localStorage.setItem("tasks", JSON.stringify(taskList));
    };
};

addButton.addEventListener('click', () => {
    taskAdder()
});

taskList.forEach(task => {
    taskAdder(content = task.content, id = task.id, checked = task.checked)
});