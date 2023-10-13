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

let food1 = "Bánh rán";
let food2 = "Mỳ tôm";
let food3 = "Cơm rang";

let list_of_food = ["Bánh rán", "Mỳ tôm", "Cơm rang"];
console.log(list_of_food);

// Thêm giá trị mới vào trong mảng: tên_mảng.push(value)
list_of_food.push("Hải sản");
console.log(list_of_food);

// Cách để lấy từng giá trị trong mảng: tên_mảng[index]
// Note: index >= 0 và index < chiều dài của mảng
console.log(list_of_food[3]);

// 3 = 4 - 1;
// 3 = list_of_food.length - 1

// Cách lấy ra chiều dải cùa mảnh: tên_mảng.length
console.log(list_of_food.length);

// Cách để lấy phần tử nằm phía cuổi mảng: tên_mảng[tên_mảng.length - 1]

let score = Number(prompt("Enter score ? "));

if (score > 9 && score <= 10) {
  alert("Với điểm " + score + " thì sẽ được A+");
} else if (score > 8 && score <= 9) {
  alert("Với điểm " + score + " thì sẽ được A");
} else if (score > 7 && score <= 8) {
  alert("Với điểm " + score + " thì sẽ được B+");
} else if (score > 6 && score <= 7) {
  alert("Với điểm " + score + " thì sẽ được B");
} else if (score > 5 && score <= 6) {
  alert("Với điểm " + score + " thì sẽ được C+");
} else if (score > 4 && score <= 5) {
  alert("Với điểm " + score + " thì sẽ được C");
} else if (score <= 4 && score >= 0) {
  alert("Với điểm " + score + " thì sẽ Đúp");
} else if (score < 0 || score > 10) {
  alert("Với điểm " + score + " thì điểm nằm ngoái giới hạn");
}
