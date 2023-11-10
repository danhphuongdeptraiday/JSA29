// 1. Console.log() và các kiểu dữ liệu cơ bản String, Number và Boolean
// console.log("Hello World");
// Những nội dung để trong ngoặc kép thì được là 1 String (chuỗi)

// console.log("123abc");

// Dữ liệu ở dạng number thì sẽ ko được bọc trong ngoặc ké và ko được đứng chữ cái hoặc ký tự đặc biệt
// console.log(123);

// Dữ liệu đúng sai (Boolean) => trả về 2 giá trị là true hoặc false

// console.log(true);

// console.log("true");

// 2. Biến: là dùng để lưu trữ 2 giá trị nào đó
// - Để khai báo biến ta có thể dùng từ let, var, const
// - Khi khai báo biến bởi từ let thì có thể thay đổi được giá trị của biến
// let myName = "Phương" + " Đẹp zai";
// const first_name = "Nguyễn ";
// first_name = "Trần ";
// // first_name = "Hoàng ";

// let fullName = first_name + myName;
// // console.log("Phương");
// console.log(fullName);

// let first_name = "Nguyễn";
// let mid_name = " Danh ";
// let last_name = "Phương";
// let age = 100;
// let fullName = first_name + mid_name + last_name;

// console.log("Tên tôi là " + fullName + ", năm nay tôi " + age + " tuổi");

// 3. Toán tử trong JS (các phép toán trong JS)
// - Các phép toán: +, -, *, /, %, **;
// let a = 2;
// let b = 8;
// let count = b + a;
// count = Math.sqrt(count);
// console.log(typeof count);
// console.log("Count = " + count);

// 4. Hàm Alert():
// alert("Count = " + count);

// 5. Hàm Prompt(): Cho phép người dùng nhập dữ liệu từ trình duyệt
// let value = prompt("Bạn nhập gì đó đi ? ");
// console.log(typeof value);
// console.log("Đầu vào được nhập là " + value);

// 6. Ép kiểu dữ liệu trong JS: Number -> String: String(Giá trị mà muốn ép kiểu)
// String -> Number: Number(Giá trị mà ta muốn ép kiểu)

// let t = 10;
// t = String(t); // t = "10"
// t = Number(t); // t = 10
// console.log(typeof t);

// let value1 = prompt("Enter number 1 ?");
// value1 = Number(value1);
// let value2 = prompt("Enter number 2 ?");
// value2 = Number(value2);

// let tong = value1 + value2;
// alert("Giá trị của tổng là: " + tong);
// alert("Giá trị tổng 2 số " + value1 + " và " + value2 + " = " + tong);

// Giá trị của tổng 2 số 10 và 20 là: 30

//7. Các phép so sánh ở trong JS:
/**
 * == : So sánh xem 2 giá trị có bằng nhau ko
 * != : So sánh xem 2 giá trị có khác nhau ko
 * <=, >=, <, > : So sánh hơn kém
 * && : Điều kiện và => thỏa đúng 2 vế trước và sau dấu &&.
 *      Ví dụ: true && true => true
 *             false && true => false
 * || : Điều kiện hoặc => chỉ cần 1 trong 2 vế đúng thì nó sẽ đúng
 *      Ví dụ: true || false => true (và ngược lại)
 *              ...
 */

// let check = a !== b;
// console.log(check);

// 8. If/else
/**
 * if(điều kiện) {
 *      nếu điều kiện = true
 *
 *      thì đoạn code trong ngoặc sẽ đc thực thi
 * } else {
 *      đoạn code ở đây sẽ chạy nếu điều kiện ở if sai
 * }
 *
 *
 */

// // DÙng hàm Prompt()
// let a = Number(prompt("Enter a ?"));
// let b = Number(prompt("Enter b ?"));

// if (a > b) {
//   alert("a lớn hơn b");
// } else if (a == b) {
//   alert("a bằng b");
// } else {
//   alert("a nhỏ hơn b");
// }

// 9. Array: Mảng => dùng lưu nhiều giá trị 1 lúc

// let food1 = "Bánh rán";
// let food2 = "Mỳ tôm";
// let food3 = "Cơm rang";

// let list_of_food = ["Bánh rán", "Mỳ tôm", "Cơm rang"];
// console.log(list_of_food);

// Thêm giá trị mới vào trong mảng: tên_mảng.push(value)
// list_of_food.push("Hải sản");
// console.log(list_of_food);

// Cách để lấy từng giá trị trong mảng: tên_mảng[index]
// Note: index >= 0 và index < chiều dài của mảng
// console.log(list_of_food[3]);

// 3 = 4 - 1;
// 3 = list_of_food.length - 1

// Cách lấy ra chiều dải cùa mảnh: tên_mảng.length
// console.log(list_of_food.length);

// Cách để lấy phần tử nằm phía cuổi mảng: tên_mảng[tên_mảng.length - 1]

// let score = Number(prompt("Enter score ? "));

// if (score > 9 && score <= 10) {
//   alert("Với điểm " + score + " thì sẽ được A+");
// } else if (score > 8 && score <= 9) {
//   alert("Với điểm " + score + " thì sẽ được A");
// } else if (score > 7 && score <= 8) {
//   alert("Với điểm " + score + " thì sẽ được B+");
// } else if (score > 6 && score <= 7) {
//   alert("Với điểm " + score + " thì sẽ được B");
// } else if (score > 5 && score <= 6) {
//   alert("Với điểm " + score + " thì sẽ được C+");
// } else if (score > 4 && score <= 5) {
//   alert("Với điểm " + score + " thì sẽ được C");
// } else if (score <= 4 && score >= 0) {
//   alert("Với điểm " + score + " thì sẽ Đúp");
// } else if (score < 0 || score > 10) {
//   alert("Với điểm " + score + " thì điểm nằm ngoái giới hạn");
// }

// TỰ học: vòng for, object, function trong JS

// 10. Function: 3 kiểu
// 10.1, Function ko có đầu vào cũng không có return => void function

// let a = 20;

// function sayHello() {
//   a = 30;
//   // console.log("123");
//   // console.log("Hello My friend");
// }

// sayHello();

// console.log(a);

// 10.2, Function có parameter (hay còn gọi là function có đầu vào)
// function count(a, b) {
//   console.log(a + b);
// }

// count(10, 20);

// 10.3, Return function: Giá trị của function sẽ tương đương với giá trị return

// function fullName(first, mid, last) {
//   let my_full_name = first + " " + mid + " " + last;
//   return my_full_name;
// }

// console.log(fullName("Trần", "Đình", "Trọng"));
// console.log(fullName("Cao", "Đức", "Khánh"));

// Bài tập chức năng máy tính bỏ túi

function plus(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

function product(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// let input = prompt("Nhập phép tính"); // +, -, *, /

// if (input == "+") {
//   let n1 = Number(prompt("Enter n1"));
//   let n2 = Number(prompt("Enter n2"));
//   alert("Kết quả: " + plus(n1, n2));
// } else if (input == "-") {
//   let n1 = Number(prompt("Enter n1"));
//   let n2 = Number(prompt("Enter n2"));
//   alert("Kết quả: " + minus(n1, n2));
// } else if (input == "*") {
//   let n1 = Number(prompt("Enter n1"));
//   let n2 = Number(prompt("Enter n2"));
//   alert("Kết quả: " + product(n1, n2));
// } else if (input == "/") {
//   let n1 = Number(prompt("Enter n1"));
//   let n2 = Number(prompt("Enter n2"));
//   alert("Kết quả: " + divide(n1, n2));
// } else {
//   alert("Nhập sai vào vui lòng nhập lại");
// }

// 11. Object(): Đối tượng => Con người
// Thuộc tính: tên, tuổi, ngày sinh, địa chỉ, ...
// Chức năng: đi, ăn, ngủ, ỉa, không thuộc bài
// Khởi tạo 1 đối tượng

// let person = {
//   name: "Phương",
//   isHandsome: true,
//   age: 100,
//   favor: ["Bóng đá", "Ăn", "Làm việc tốt"],
// };

// console.log(person.favor[0]);

// console.log(
//   person.name +
//     " năm nay " +
//     person.age +
//     " tuổi, " +
//     person.name +
//     " có đẹp trai không ? => " +
//     person.isHandsome
// );

// 12. Vòng for: vòng lặp => dùng để thực thi 1 hành động giống nhau nhiều lần
// for(vị trí bắt đầu; điều kiện để vòng lặp chạy, bước nhảy mỗi lần lặp) {

// }

// let t = 10;
// t = t + 2; // t = 12
// t += 1; // t = 12
// t++; // t = 13
// console.log(13);

// if (t % 2 == 0) {
//   console.log("số lẻ");
// }

// for (let i = 0; i < 10; i++) {
//   if (i % 2 != 0) {
//     console.log(i);
//   }
// }

// let t = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10;

// let c = 0;

// // c = c + 1; // c = 1
// // c = c + 2; // c = 3
// // c = c + 3; // c = 6
// // c = c + 4;

// for (let i = 1; i <= 10; i = i + 5) {
//   c = c + i;
// }

// console.log(c);

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0 && i % 3 == 0) {
//     console.log(i);
//   }
// }

// let array = ["Bún", "Phở", "Nem"];
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
// let c = 0;
// let array_number = [34, 8, 9, 64, 19, 100];
// for (let i = 0; i < array_number.length; i++) {
//   c = c + array_number[i];
// }

// console.log(c);

// Tính số lượng phần tử trong mảng trên

// Tính giai thừa của 1 số: 5 = 1x2x3x4x5

// let number_input = 5;
// let temp = 1;
// for (let i = 1; i <= 5; i++) {
//   temp = temp * i;
// }

// console.log(temp);

// let list_name = ["Phương", "Minh", "Bách", "Sơn", "Khánh"];
// let list_name_reverse = [];
// for (let i = list_name.length - 1; i >= 0; i--) {
//   list_name_reverse.push(list_name[i]);
// }

// console.log(list_name_reverse);

// Dùng vòng for tạo 1 mảng mới, yêu cầu mảng mới này phải chứa các tên theo
// thứ tự đảo ngược
// Đầu ra: ["Khánh", "Sơn", "Bách", "Minh", "Phương"]

// 13. DOM:
/**
 * Lấy 1 thẻ thông qua id: getElementById("Tên của id")
 * Lây nhiều thông qua class name: getElementsByClassName("Tên class")
 * Thuộc tính innerText: Để lấy ra nội bên trong thẻ
 * Thuộc tính style: thay đổi css của 1 thẻ
 * Tạo 1 thẻ mới bên HTML thông quan DOM
 */

let myElement = document.getElementById("myFirstElement");
console.log(myElement);
myElement.innerText = "Nguyễn Danh Phương";
myElement.style.color = "red";
myElement.style.backgroundColor = "yellow";
console.log(myElement.innerText);

/**
 * Tạo 1 thẻ p có id là myAge
 * Dùng dom trong jS để đổi màu chữ, đổi cỡ chữ, đổi width và height của thẻ đó
 *
 */

let myText = document.getElementsByClassName("myText");
for (let i = 0; i < myText.length; i++) {
  console.log(myText[i].innerText);

  myText[i].style.backgroundColor = "pink";
}

let list_name = ["Phương", "Minh", "Bách", "Sơn", "Khánh"];
for (let i = 0; i < list_name.length; i++) {
  console.log(list_name[i]);
}
// Dùng vòng for in ra tất cả các phần tử trong mảng trên

let newDiv = document.createElement("div");
// newDiv.innerText = "Thẻ div mới được tạo";
newDiv.style.fontWeight = "bold";
newDiv.style.width = "600px";
newDiv.style.height = "400px";
newDiv.style.backgroundColor = "pink";

document.body.appendChild(newDiv);

let newImage = document.createElement("img");
newImage.src =
  "https://codelearnstorage.s3.amazonaws.com/CodeCamp/CodeCamp/Upload/Course/c6b8d5cfe9ff4b56887e8751d37a1c61.png";
newImage.style.width = "200px";
newDiv.appendChild(newImage);
