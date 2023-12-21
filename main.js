function Parent() {
  Generate_otp(4);
  ChangeOver();
}

let otp = "";
function Generate_otp(length) {
  for (let i = 0; i < length; i++) {
    let number = Math.floor(Math.random() * 10);
    otp += number;
  }
  document.getElementById("OTP").innerHTML = otp;
}
function ChangeOver() {
  document.getElementById("form").style.display = "none";
  document.getElementById("Verifier").style.display = "flex";
  document.getElementById("display").style.display = "block";
}
// Verification
function Verify() {
  let OTP = document.getElementById("OTP").value;
  let confirm = document.getElementById("confirm").value;

  if (otp === confirm) {
    document.getElementById("Login_message").style.display = "block";
    document.getElementById("Verifier").style.display = "none";
    document.getElementById("display").style.display = "none";
  } else {
    return false;
  }
~}
