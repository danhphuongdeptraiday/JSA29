let username = document.getElementById("username");
let password = document.getElementById("password");
let register_btn = document.getElementById("register");

register_btn.addEventListener("click", function () {
  let checkValidateInput = is_Input_Fill(username.value, password.value);

  if (checkValidateInput == true) {
    localStorage.setItem(username.value, password.value);
    username.value = "";
    password.value = "";

    location.href = "./login.html";
  }
});

function is_Input_Fill(username, password) {
  if (username == "" && password == "") {
    alert("Bạn đang thiếu cả Key và value");
    return false;
  } else if (password == "") {
    alert("Thiếu value");
    return false;
  } else if (username == "") {
    alert("Thiếu Key");
    return false;
  }

  return true;
}

// console.log(t);
