let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit", (dets) => {
  dets.preventDefault();

  let emailerror = document.querySelector("#emailerror");
  let passworderror = document.querySelector("#passworderror");

  emailerror.textContent = "";
  passworderror.textContent = "";

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  let emailans = emailRegex.test(email.value);
  let passwordans = passwordRegex.test(password.value);

  emailerror.style.display = "none";
  passworderror.style.display = "none";

  if (!emailans) {
    emailerror.textContent = "Email is incorrect";
    emailerror.style.display = "initial";
  }

  if (!passwordans) {
    passworderror.textContent = "Password must include uppercase, lowercase, number & symbol";
    passworderror.style.display = "initial";
  }


  if (emailans && passwordans) {
    alert("Login Successful!");
  }
});
