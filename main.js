const modalButton = document.querySelector(".user_login"),
  modalWindow = document.querySelector(".modal"),
  modalFon = document.querySelector(".modal_fon"),
  escButton = modalWindow.querySelector(".modal_ecs"),
  loginIntup = modalWindow.querySelector(".modal_login"),
  loginPas = modalWindow.querySelector(".modal_passwords"),
  authButton = modalWindow.querySelector(".modal_auth"),
  errorPas = modalWindow.querySelector(".error_pas"),
  errorLog = modalWindow.querySelector(".error_log");

function toggleModal() {
  modalWindow.classList.toggle("hidden");
  modalFon.classList.toggle("hidden");
  loginIntup.classList.remove("invalid");
  loginPas.classList.remove("invalid");
  errorPas.classList.add("hidden");
  errorLog.classList.add("hidden");
  loginIntup.value = "";
  loginPas.value = "";
}

function fdfdf() {
  console.log("fgcfgfc");
}
function submitForm(evt) {
  const loginPasRegEx =
    /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;

  const isloginValid =
    loginIntup.value.length > 3 && loginIntup.value.trim() !== "";
  const isPasswordValid = loginPasRegEx.test(loginPas.value);
  const isFormValid = isloginValid && isPasswordValid;

  if (isFormValid) {
    loginIntup.classList.remove("invalid");
    loginPas.classList.remove("invalid");
  } else {
    evt.preventDetault();
    loginIntup.classList.add("invalid");
    loginPas.classList.add("invalid");
    errorPas.classList.remove("hidden");
    errorLog.classList.remove("hidden");
  }
}
modalButton.addEventListener("click", toggleModal);
escButton.addEventListener("click", toggleModal);
authButton.addEventListener("click", submitForm);
