const closeIconsEl = document.querySelector(".bi-x");
const inputEl = document.querySelector(".todo_input");
const todoTaskEl = document.querySelector(".todo_task");
const formEl = document.querySelector(".todo_list_top_content");
const allDeleteEl = document.querySelector(".btn_all_delete");

// input value delete
closeIconsEl.addEventListener("click", () => {
  inputEl.value = "";
});

// all delete
allDeleteEl.addEventListener("click", () => {
  const agree = confirm("Are you sure to delete this?");
  if (agree) {
    todoTaskEl.innerHTML = "";
  }
});

// form content
formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new Date();

  const sana =
    data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();

  const divEl = document.createElement("div");
  const btnDivEl = document.createElement("div");
  const pEl = document.createElement("p");

  const btnCompleteEl = document.createElement("button");
  const btnEditEl = document.createElement("button");
  const btnDataEl = document.createElement("button");
  const btnDeleteEl = document.createElement("button");

  pEl.innerText = inputEl.value;
  btnCompleteEl.innerHTML = `<i class="bi bi-check2-circle"></i> Complete`;
  btnEditEl.innerHTML = `<i class="bi bi-pencil-square"></i></i> Edit`;
  btnDataEl.innerHTML = `<i class="bi bi-clock"></i> ${sana}`;
  btnDeleteEl.innerHTML = `<i class="bi bi-trash3"></i> Delete`;

  pEl.className = "input_text";
  btnCompleteEl.className = "btn_complete";
  btnEditEl.className = "btn_edit";
  btnDataEl.className = "btn_data";
  btnDeleteEl.className = "btn_delete";
  btnDivEl.className = "btn_div";
  divEl.className = "todo_card";

  divEl.appendChild(pEl);
  btnDivEl.appendChild(btnCompleteEl);
  btnDivEl.appendChild(btnEditEl);
  btnDivEl.appendChild(btnDataEl);
  btnDivEl.appendChild(btnDeleteEl);
  divEl.appendChild(btnDivEl);
  todoTaskEl.appendChild(divEl);

  inputEl.value = "";

  btnCompleteEl.addEventListener("click", (e) => {
    e.preventDefault();
    pEl.classList.toggle("complite");
  });
  btnDeleteEl.addEventListener("click", (e) => {
    e.preventDefault();
    const agree = confirm("Are you sure to delete this?");
    if (agree) {
      divEl.remove();
    }
  });
});
