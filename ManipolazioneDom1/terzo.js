function addProduct() {
  const $input = document.querySelector("input");
  const $value = $input.value;
  const $ul = document.querySelector("ul");
  const $li = document.createElement("li");
  $ul.appendChild($li1);

  const $checkBox = document.createElement("input");
  $checkBox.setAttribute("type", "checkbox");
  $li.appendChild($checkBox);

  const $span = document.createElement("span");
  $span.innerText = $value;
  $li.appendChild($span);
}
