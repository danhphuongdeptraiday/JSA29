let input_key = document.getElementById("key");
let input_value = document.getElementById("value");
let add_btn = document.getElementById("add");

add_btn.addEventListener("click", function () {
  let checkValidateInput = is_Input_Fill(input_key.value, input_value.value);

  if (checkValidateInput == true) {
    localStorage.setItem(input_key.value, input_value.value);
    input_key.value = "";
    input_value.value = "";
  }
});

function is_Input_Fill(input_key, input_value) {
  if (input_key == "" && input_value == "") {
    alert("Bạn đang thiếu cả Key và value");
    return false;
  } else if (input_value == "") {
    alert("Thiếu value");
    return false;
  } else if (input_key == "") {
    alert("Thiếu Key");
    return false;
  }

  return true;
}

// console.log(t);
