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
let a = 2;
let b = 8;
let count = b ** a;
count = Math.sqrt(count);
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

let value1 = prompt("Enter number 1 ?");
let value2 = prompt("Enter number 2 ?");
