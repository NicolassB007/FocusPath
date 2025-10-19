const metaName = document.querySelector("#metaName");
const taskDescription = document.querySelector("#taskDescription");
const submitButton = document.querySelector("#submitButton");

const errorMsg = document.querySelector("#msgError");

const itemsTbody = document.querySelector("#tableMestas");

let idTasks = 1;

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    const metaNameValue = metaName.value;
    const taskDescriptionValue = taskDescription.value;

    if (metaNameValue === '' || taskDescriptionValue === '') {
        errorMsg.textContent = "Por favor, preencha os campos";
        return;
    }

    errorMsg.textContent = '';

    let row = document.createElement("tr");
    
    let idTaskTd = document.createElement("td");
    let taskNameTd = document.createElement("td");
    let taskDescriptionTd = document.createElement("td");

    idTaskTd = idTasks;
    taskNameTd = metaNameValue;
    taskDescriptionTd = taskDescriptionValue;

    row.innerHTML = `<tr><td>${idTaskTd}</td> <td>${taskNameTd}</td> <td>${taskDescriptionTd}</td> <button class="button btnRemove">Remover</button></tr>`;

    itemsTbody.appendChild(row);

    idTasks += 1;
    metaName.value = '';
    taskDescription.value = '';

    const btnRemove = row.querySelector('.btnRemove');
    if (btnRemove) {
        btnRemove.addEventListener('click', () => {
            row.remove()
        });
    }

});
