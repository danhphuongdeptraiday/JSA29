// let box = document.getElementById("box");

// function changeColor() {
//   if (box.style.backgroundColor == "red") {
//     box.style.backgroundColor = "black";
//   } else {
//     box.style.backgroundColor = "red";
//   }
// }

// let hide_btn = document.getElementById("hide");

// function hide() {
//   if (box.style.display == "none") {
//     box.style.display = "block";
//     hide_btn.innerText = "Hide";
//   } else {
//     box.style.display = "none";
//     hide_btn.innerText = "Show";
//   }
// }

let name1 = "Phương";

localStorage.setItem("name1", name1);
localStorage.setItem("name2", "Phong");

let person = {
  name: "Phương",
  age: 100,
};

console.log(person);

localStorage.setItem("person", JSON.stringify(person));

// Nếu lữu 1 dữ liệu ở dạng đối tượng và mảng vào trong
// localStorage thì mình phải có JSON.stringfy()

// Lấy dữ liệu ở trạng thái String Object từ localStorage ra
// thì ta phải có bước JSON.parse()
let t = JSON.parse(localStorage.getItem("person"));
console.log(t);

let value_from_local = localStorage.getItem("name1");
console.log(value_from_local);

let add_btn = document.getElementById("add");
let input = document.getElementById("key");

add_btn.addEventListener("click", function () {
  console.log(typeof input.value);

  input.value = "";
});

/**
 * Nội dung bài: Lữu dữ liệu vào trong localStorage khi người dùng nhập đủ ô input key và input value
 *
 * Nâng cao: Chung ta sẽ chỉ cho người dung lưu thông tin khi 2 ô input ko đc để trống
 *
 */
