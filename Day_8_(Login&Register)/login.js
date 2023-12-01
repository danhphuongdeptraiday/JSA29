let login_btn = document.getElementById("login_btn");
let username = document.getElementById("username");
let password = document.getElementById("password");

let array_key_localStorage = Object.keys(localStorage); // get All Key from localStorage

login_btn.addEventListener("click", function () {
  let check = checkExistedUser(username.value); // true hoặc false

  if (check == true) {
    let password_existed_user_from_localStorage = localStorage.getItem(
      username.value
    );
    if (password_existed_user_from_localStorage == password.value) {
      alert("Đăng nhập thành công");
    } else {
      alert("Sai Password");
    }
  } else {
    alert("Tên này chưa tồn tại");
  }
});

function checkExistedUser(username) {
  for (let i = 0; i < array_key_localStorage.length; i++) {
    if (username == array_key_localStorage[i]) {
      return true;
    }
  }

  return false;
}
