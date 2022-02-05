const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");
button.onclick = function () {
  let scripture = input.value;
  input.value = "";
  if (input.value != "") {
    const scriptureList = document.createElement("li");
    const scriptureText = document.createElement("span");
    const addBtn = document.createElement("button");

    scriptureList.appendChild(scriptureText);
    scriptureText.textContent = scripture;
    scriptureList.appendChild(addBtn);
    addBtn.textContent = "Delete";
    list.appendChild(scriptureList);
    addBtn.onclick = function (e) {
      list.removeChild(scriptureList);
    };
    input.focus();
  }
};
