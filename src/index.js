import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得して、初期化する
  const inputText = document.getElementById("addtext").value;
  document.getElementById("addtext").value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";
  console.log(div);

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //divタグの子要素に各要素を設定

  div.appendChild(li);
  document.getElementById("incompleteList").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
