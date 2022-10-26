const createClientsItem = (
  id1,
  fio1,
  creationDate1,
  changeDate1,
  contacts1
) => {
  const clientsBox = document.querySelector(".clients");
  const clientsList = document.createElement("tr");
  const id = document.createElement("td");
  const fio = document.createElement("td");
  const creationDate = document.createElement("td");
  const changeDate = document.createElement("td");
  const contacts = document.createElement("td");
  const changeBtn = document.createElement("td");
  const deconsteBtn = document.createElement("td");
  const creationdateSpan = document.createElement("span");
  const changedateSpan = document.createElement("span");
  const btnChange = document.createElement("button");
  const btnDelete = document.createElement("button");

  id.classList.add("id");
  fio.classList.add("fio");
  creationDate.classList.add("creationdate");
  changeDate.classList.add("changedate");
  contacts.classList.add("contacts");
  changeBtn.classList.add("btn1");
  deconsteBtn.classList.add("btn2");
  btnChange.classList.add("btn", "btn--change");
  btnDelete.classList.add("btn", "btn--delete");

  id.textContent = id1;
  fio.textContent = fio1;
  creationDate.textContent = creationDate1;
  changeDate.textContent = changeDate1;
  contacts.textContent = contacts1;
  creationdateSpan.textContent = "12:41";
  changedateSpan.textContent = "12:41";
  btnChange.textContent = "Изменить";
  btnDelete.textContent = "Удалить";

  changeBtn.append(btnChange);
  deconsteBtn.append(btnDelete);
  creationDate.append(creationdateSpan);
  changeDate.append(changedateSpan);
  clientsList.append(
    id,
    fio,
    creationDate,
    changeDate,
    contacts,
    changeBtn,
    deconsteBtn
  );

  clientsBox.append(clientsList);
  return {
    clientsList,
    btnChange,
    btnDelete,
  };
};

const btn = document.querySelector(".addclient");
btn.addEventListener("click", () => {
  createClientsItem(
    "123456",
    "Медведев Борис Николаевич",
    "22.10.1978",
    "22.10.1978",
    "contacts"
  );
});
